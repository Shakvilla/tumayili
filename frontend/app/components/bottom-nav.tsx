"use client";

import { Home, Search, Clock, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomNavProps {
  onProfileClick: () => void;
}

export default function BottomNav({ onProfileClick }: BottomNavProps) {
  const navItems = [
    { icon: Home, label: "Home", action: () => {} },
    { icon: Search, label: "Discover", action: () => {} },
    { icon: Clock, label: "Orders", action: () => {} },
    { icon: User, label: "Profile", action: onProfileClick },
  ];

  return (
    <div className="bg-white border-t border-border p-1 md:p-2 flex justify-around items-center relative">
      {/* First half of nav items */}
      <div className="flex justify-around flex-1">
        {navItems.slice(0, 2).map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-0.5 md:gap-1 h-auto py-1.5 md:py-2"
            onClick={item.action}
          >
            <item.icon className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-[10px] md:text-xs">{item.label}</span>
          </Button>
        ))}
      </div>

      {/* Add service button */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-5 md:-top-6">
        <Button
          size="icon"
          className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        >
          <Plus className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
          <span className="sr-only">Add Service</span>
        </Button>
      </div>

      {/* Second half of nav items */}
      <div className="flex justify-around flex-1">
        {navItems.slice(2).map((item, index) => (
          <Button
            key={index + 2}
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-0.5 md:gap-1 h-auto py-1.5 md:py-2"
            onClick={item.action}
          >
            <item.icon className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-[10px] md:text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
