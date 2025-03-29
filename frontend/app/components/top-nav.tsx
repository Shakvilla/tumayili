import React from "react";
import SearchBar from "../dashboard/components/search-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { ModeToggle } from "@/components/toggle";

const TopNav = () => {
  return (
    <div>
      {" "}
      <div className="sticky top-0  p-2 sm:p-3 md:p-4 z-20">
        <div className="flex items-center justify-between gap-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="w-6xl">
            <h1 className="text-md font-bold text-foreground">
              Hello, Abdul Shakur
            </h1>
            <span className="text-xs text-muted-foreground">
              Find any artisan to fix any issue you have
            </span>
          </div>
          <div className="w-5 h-5 mx-2 flex justify-center items-center rounded-full  ">
            {/* <Bell className="w-5 h-5 text-gray-700" /> */}
            <ModeToggle />
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
