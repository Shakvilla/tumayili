"use client";

import { Star, Bookmark } from "lucide-react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Artisan {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  categories: string[];
  image: string;
  isSaved?: boolean;
}

interface TopArtisansAroundProps {
  title?: string;
  location?: string;
  artisans?: Artisan[];
}

const defaultArtisans: Artisan[] = [
  {
    id: "1",
    name: "Sauve Contactor",
    location: "Sauve Estate, Osapa London, Lekki",
    rating: 5,
    reviews: 2275,
    categories: ["Carpentry", "Plumbing"],
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Big K Home service",
    location: "No 2 kola str, Osapa London, Lekki",
    rating: 5,
    reviews: 5275,
    categories: ["Barber"],
    image:
      "https://images.unsplash.com/photo-1568259701122-d82953b2b538?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add more artisans for better carousel effect
  {
    id: "3",
    name: "Elite Electricals",
    location: "Lekki Phase 1, Lagos",
    rating: 4.9,
    reviews: 3150,
    categories: ["Electrical"],
    image:
      "https://images.unsplash.com/photo-1632660820654-f609bf2e83e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "Pro Painters",
    location: "Chevron Drive, Lekki",
    rating: 4.8,
    reviews: 1890,
    categories: ["Painting"],
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: "5",
    name: "Elite Electricals",
    location: "Lekki Phase 1, Lagos",
    rating: 4.9,
    reviews: 3150,
    categories: ["Electrical"],
    image:
      "https://images.unsplash.com/photo-1632660820654-f609bf2e83e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function TopArtisansAround({
  title = "Top Artisans in Adenta",
  location = "Hire top artisans around in Adenta",
  artisans = defaultArtisans,
}: TopArtisansAroundProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {artisans?.map((artisan) => (
            <CarouselItem
              key={artisan.id}
              className="pl-2 md:pl-4 basis-[280px] md:basis-[320px]"
            >
              <Card className="overflow-hidden py-0 hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <Image
                    src={artisan?.image}
                    alt={artisan.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                  <div className="absolute top-2 left-4 flex flex-wrap gap-2">
                    {artisan.categories.map((category) => (
                      <Badge
                        key={category}
                        variant="secondary"
                        className="bg-orange-500/80 text-white hover:bg-orange-600"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-white hover:text-blue-500"
                    onClick={() => {}}
                  >
                    <Bookmark
                      className={artisan.isSaved ? "fill-current" : ""}
                      size={20}
                    />
                  </Button>
                </div>

                <div className="px-4 pb-4 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{artisan.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {artisan.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({artisan.reviews.toLocaleString()})
                    </span>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
