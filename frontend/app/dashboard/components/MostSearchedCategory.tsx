"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Hammer,
  Lightbulb,
  Wrench,
  Wheat,
  Paintbrush,
  Scissors,
} from "lucide-react";
import Link from "next/link";
// import {
//   Hammer,
//   Lightbulb,
//   Paintbrush,
//   Wrench,
//   Scissors,
//   Broom,
// } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
}

const categories: Category[] = [
  {
    id: "1",
    name: "Carpenter",
    icon: <Hammer className="w-4 h-4" />,
    url: "#",
  },
  {
    id: "2",
    name: "Electrician",
    icon: <Lightbulb className="w-4 h-4" />,
    url: "#",
  },
  {
    id: "3",
    name: "Cleaner",
    icon: <Wheat className="w-4 h-4" />,
    url: "#",
  },
  {
    id: "4",
    name: "Plumber",
    icon: <Wrench className="w-4 h-4" />,
    url: "#",
  },
  {
    id: "5",
    name: "Painter",
    icon: <Paintbrush className="w-4 h-4" />,
    url: "#",
  },
  {
    id: "6",
    name: "Barber",
    icon: <Scissors className="w-4 h-4" />,
    url: "#",
  },
];

export function MostSearchedCategory() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Most Searched Category</h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((category) => (
            <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-auto">
              <Link
                href={category.url}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full 
                hover:bg-primary/60 border border-primary  transition-colors duration-200"
              >
                <span className="text-primary">{category.icon}</span>
                <span className="text-primary font-medium whitespace-nowrap">
                  {category.name}
                </span>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-0" />
        <CarouselNext className="hidden md:flex right-0" />
      </Carousel>
    </div>
  );
}
