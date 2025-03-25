import React from "react";
import SearchBar from "../dashboard/components/search-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

const TopNav = () => {
  return (
    <div>
      {" "}
      <div className="sticky top-0  p-2 sm:p-3 md:p-4 z-20">
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
    </div>
  );
};

export default TopNav;
