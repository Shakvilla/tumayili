"use client";

import { Card } from "@/components/ui/card";
import { Heart, Star, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Deal {
  id: string;
  title: string;
  description: string;
  currentPrice: string;
  originalPrice: string;
  priceUnit: string;
  location: string;
  rating: number;
  image: string;
  isFavorite?: boolean;
}

interface TopDealsProps {
  title?: string;
  deals?: Deal[];
  className?: string;
  onFavoriteClick?: (id: string) => void;
}

const defaultDeals: Deal[] = [
  {
    id: "1",
    title: "Private Chef",
    description:
      "At our carpentry artisan shop, we take pride in creating beautiful, high-quality...",
    currentPrice: "300",
    originalPrice: "500",
    priceUnit: "hr",
    location: "Ashiyie",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Mop up",
    description:
      "At our carpentry artisan shop, we take pride in creating beautiful, high-quality...",
    currentPrice: "50",
    originalPrice: "80",
    priceUnit: "room",
    location: "Commandos",
    rating: 4.8,
    isFavorite: true,
    image:
      "https://images.unsplash.com/photo-1611021061421-93741ec41ce1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Gifty's Make-UP",
    description:
      "At our carpentry artisan shop, we take pride in creating beautiful, high-quality...",
    currentPrice: "300",
    originalPrice: "400",
    priceUnit: "hr",
    location: "Frafraha",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Angie's Therapy",
    description:
      "At our carpentry artisan shop, we take pride in creating beautiful, high-quality...",
    currentPrice: "50",
    originalPrice: "80",
    priceUnit: "room",
    location: "New Legon",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1621691553102-66d4ecdb1be2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function TopDeals({
  title = "Top discounts and deals",
  deals = defaultDeals,
  className,
  onFavoriteClick,
}: TopDealsProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link href="/deals" className="text-blue-600 hover:underline">
          See all
        </Link>
      </div>

      <div className="space-y-4">
        {deals.map((deal) => (
          <Card key={deal.id} className="p-4">
            <div className="flex gap-4">
              <div className="relative p-2 w-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => onFavoriteClick?.(deal.id)}
                  className="absolute top-2 right-2 p-1.5 bg-foreground/80 rounded-full hover:bg-white transition-colors"
                >
                  <Heart
                    size={20}
                    className={cn(
                      "transition-colors",
                      deal.isFavorite
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    )}
                  />
                </button>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold">{deal.title}</h3>
                <p className="text-sm  line-clamp-2 mb-2">{deal.description}</p>

                <div className="inline-flex items-center px-3 py-1 bg-primary rounded-full text-sm text-blue-50">
                  <span>
                    GHC {deal.currentPrice}/{deal.priceUnit}
                  </span>
                  <span className="ml-2 line-through  text-blue-300">
                    GHC{deal.originalPrice}/{deal.priceUnit}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center text-foreground">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{deal.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star
                      size={16}
                      className="text-yellow-400 fill-yellow-400 mr-1"
                    />
                    <span className="text-sm text-foreground">
                      ({deal.rating})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
