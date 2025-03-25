"use client";

import { useState } from "react";
import MapView from "../artisans/components/map-view";
import SearchBar from "./components/search-bar";
import ProfileView from "./components/profile-view";
import BottomNav from "../components/bottom-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { StatusView } from "./components/StatusView";
import PromoCarousel from "./components/promo-carousel";
import Categories from "./components/Categories";
import { TopArtisansAround } from "./components/TopArtisansAround";
import { MostSearchedCategory } from "./components/MostSearchedCategory";
import { TopDeals } from "./components/Deals";

export default function HomePage() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <main className="relative h-screen flex flex-col bg-gray-100">
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pb-16">
        {" "}
        {/* pb-16 adds padding at bottom to prevent content from being hidden behind nav */}
        {/* Header - Sticky at top */}
        <div className="sticky top-0 bg-gray-100 p-2 sm:p-3 md:p-4 z-20">
          <div className="flex items-center justify-between gap-2">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-6xl">
              <h1 className="text-lg font-bold text-foreground">
                Hello, Abdul Shakur
              </h1>
              <span className="text-sm text-gray-600">
                Find any artisan to fix any issue you have
              </span>
            </div>
            <div className="p-2 rounded-full bg-card">
              <Bell className="w-5 h-5 text-gray-700" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4">
            <SearchBar />
          </div>
        </div>
        {/* Scrollable Content */}
        <div className="space-y-6 p-3">
          <div className="my-2">
            <StatusView />
          </div>
          <PromoCarousel />

          <Categories />
          <div className="my-2">
            <Separator />
          </div>
          <div>
            <TopArtisansAround />
          </div>

          <div>
            <MostSearchedCategory />
          </div>
          <div>
            <TopDeals />
          </div>
          {/* <PromoCarousel />
          <PromoCarousel />
          <PromoCarousel /> */}
        </div>
      </div>

      {/* Profile View - Slide in from right */}
      <ProfileView show={showProfile} onClose={() => setShowProfile(false)} />

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t z-50">
        <BottomNav onProfileClick={() => setShowProfile(true)} />
      </div>
    </main>
  );
}
