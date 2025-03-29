"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const promoItems = [
  {
    id: 1,
    title:
      "Experience the artistry of master woodworkers who can transform your quality and attention",
    discount: "45%",
    image:
      "https://images.unsplash.com/photo-1632660820654-f609bf2e83e5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-amber-100",
  },
  {
    id: 2,
    title:
      "Living space with custom-crafted furniture, intricate carvings, and professional home repairs.",
    discount: "30%",
    image:
      "https://images.unsplash.com/photo-1568259701122-d82953b2b538?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    title:
      " Our skilled artisans bring decades of expertise to every project, ensuring exceptional...",
    discount: "25%",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-green-100",
  },
];

export default function PromoCarousel() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {promoItems.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative overflow-hidden border-0 rounded-xl shadow-lg">
                <div
                  className="relative h-40 sm:h-56 md:h-64 lg:h-80 bg-cover bg-center p-4 sm:p-6 flex flex-col justify-between"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.image})`,
                  }}
                >
                  {/* Promo Badge */}
                  <div className="absolute top-4 sm:top-4 left-0 sm:left-4">
                    <div className="bg-secondary text-primary font-semibold px-2 sm:px-4 py-1 sm:py-1 rounded-r-full text-xs sm:text-sm">
                      Promo
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <div className="bg-primary text-white font-bold p-2 sm:p-2 rounded-full flex flex-col items-center">
                      <span className="text-[10px] sm:text-xs">Up to</span>
                      <span className="text-base sm:text-xl">
                        {item.discount}
                      </span>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="mt-10 sm:mt-16">
                    <h2 className="text-white text-sm text-wrap md:text-2xl lg:text-3xl font-base leading-normal">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious className="left-2 sm:left-4" />
        <CarouselNext className="right-2 sm:right-4" /> */}

        {/* Dots Indicator */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {promoItems.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
