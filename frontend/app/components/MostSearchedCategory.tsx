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
  Paintbrus,
  Scissorsh,
  Lightbulb,
  Wrench,
  Wheat,
  Paintbrush,
  Scissors,
} from "lucide-react";
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
}

const categories: Category[] = [
  {
    id: "1",
    name: "Carpenter",
    icon: <Hammer className="w-6 h-6" />,
  },
  {
    id: "2",
    name: "Electrician",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    id: "3",
    name: "Cleaner",
    icon: <Wheat className="w-6 h-6" />,
  },
  {
    id: "4",
    name: "Plumber",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    id: "5",
    name: "Painter",
    icon: <Paintbrush className="w-6 h-6" />,
  },
  {
    id: "6",
    name: "Barber",
    icon: <Scissors className="w-6 h-6" />,
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
              <button
                className="flex items-center gap-2 px-6 py-2 bg-orange-100 rounded-full 
                hover:bg-orange-200 border border-orange-500  transition-colors duration-200"
              >
                <span className="text-orange-500">{category.icon}</span>
                <span className="text-orange-500 font-medium whitespace-nowrap">
                  {category.name}
                </span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-0" />
        <CarouselNext className="hidden md:flex right-0" />
      </Carousel>
    </div>
  );
}
