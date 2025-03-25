"use client";

import { useState, useEffect } from "react";
import { X, Heart, Send, MoreVertical, Music2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Story {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  media: {
    type: "image" | "video";
    url: string;
    duration?: number;
  }[];
  timestamp: string;
  music?: string; // Optional music info
}

interface StatusViewerProps {
  stories: Story[]; // Changed from single story to array of stories
  initialStoryIndex: number;
  onClose: () => void;
}

export function StatusViewer({
  stories,
  initialStoryIndex,
  onClose,
}: StatusViewerProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentStory = stories[currentStoryIndex];

  // Handle story progression with improved timing
  useEffect(() => {
    const duration = currentStory.media[currentMediaIndex].duration || 7; // Increased default duration to 7 seconds
    const interval = 10;
    const steps = (duration * 1000) / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        // Add transition state
        setIsTransitioning(true);

        // Delay the transition to next story/media
        setTimeout(() => {
          if (currentMediaIndex < currentStory.media.length - 1) {
            setCurrentMediaIndex((prev) => prev + 1);
            setProgress(0);
          } else if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex((prev) => prev + 1);
            setCurrentMediaIndex(0);
            setProgress(0);
          } else {
            onClose();
          }
          setIsTransitioning(false);
        }, 200); // 200ms delay for smooth transition
      }
    }, interval);

    return () => clearInterval(timer);
  }, [
    currentMediaIndex,
    currentStoryIndex,
    currentStory.media,
    stories.length,
    onClose,
  ]);

  // Handle touch/click navigation
  const handleScreenClick = (e: React.MouseEvent) => {
    const screenWidth = window.innerWidth;
    const clickX = e.clientX;

    // Click on left third of screen - go back
    if (clickX < screenWidth / 3) {
      if (currentMediaIndex > 0) {
        setCurrentMediaIndex((prev) => prev - 1);
        setProgress(0);
      } else if (currentStoryIndex > 0) {
        setCurrentStoryIndex((prev) => prev - 1);
        setCurrentMediaIndex(stories[currentStoryIndex - 1].media.length - 1);
        setProgress(0);
      }
    }
    // Click on right third of screen - go forward
    else if (clickX > (screenWidth * 2) / 3) {
      if (currentMediaIndex < currentStory.media.length - 1) {
        setCurrentMediaIndex((prev) => prev + 1);
        setProgress(0);
      } else if (currentStoryIndex < stories.length - 1) {
        setCurrentStoryIndex((prev) => prev + 1);
        setCurrentMediaIndex(0);
        setProgress(0);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Progress bars with smooth transition */}
      <div className="absolute top-0 left-0 right-0 flex gap-1 p-2">
        {currentStory.media.map((_, index) => (
          <Progress
            key={index}
            value={
              index === currentMediaIndex
                ? progress
                : index < currentMediaIndex
                ? 100
                : 0
            }
            className="h-0.5 bg-gray-600 transition-all duration-200"
            indicatorClassName="bg-white transition-all duration-200 ease-linear"
          />
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-4 left-0 right-0 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 border border-white">
            <AvatarImage src={currentStory.userAvatar} />
            <AvatarFallback>{currentStory.userName[0]}</AvatarFallback>
          </Avatar>
          <div className="text-white">
            <p className="text-sm font-semibold">{currentStory.userName}</p>
            <p className="text-xs opacity-70">{currentStory.timestamp}</p>
          </div>
        </div>
        {currentStory.music && (
          <div className="flex items-center gap-2 text-white">
            <Music2 size={16} />
            <span className="text-sm">{currentStory.music}</span>
          </div>
        )}
        <div className="flex items-center gap-4">
          <button className="text-white hover:opacity-70">
            <MoreVertical size={20} />
          </button>
          <button onClick={onClose} className="text-white hover:opacity-70">
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Media Content with fade transition */}
      <div className="relative w-full h-full" onClick={handleScreenClick}>
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-200",
            isTransitioning ? "opacity-50" : "opacity-100"
          )}
        >
          {currentStory.media[currentMediaIndex].type === "image" ? (
            <img
              src={currentStory.media[currentMediaIndex].url}
              alt=""
              className="w-full h-full object-contain"
            />
          ) : (
            <video
              src={currentStory.media[currentMediaIndex].url}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div className="flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-full p-4">
          <input
            type="text"
            placeholder="Send message"
            className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-sm"
          />
          <button className="text-white hover:opacity-70">
            <Heart size={24} />
          </button>
          <button className="text-white hover:opacity-70">
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
