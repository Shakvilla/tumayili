"use client";

import { useState } from "react";
import { Search, MapPin, Clock, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // const recentSearches = [
  //   { id: 1, name: "Woodworking", address: "Custom furniture, carvings" },
  //   { id: 2, name: "Pottery", address: "Handmade ceramics, clay art" },
  //   { id: 3, name: "Jewelry", address: "Custom metalwork, gemstones" },
  // ];

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSearchValue("");
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder="Find artisans or crafts"
          className="px-10 py-4 md:py-8 text-sm md:text-base  rounded-md bg-white"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={handleFocus}
        />
        {searchValue && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={() => setSearchValue("")}
          >
            <X className="h-6 w-6" />
          </Button>
        )}
      </div>
      {/* 
      {isExpanded && (
        <Card className="absolute top-full left-0 right-0 mt-2 p-3 md:p-4 z-20 shadow-lg max-h-[50vh] md:max-h-[60vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <h3 className="text-xs md:text-sm font-medium">Recent Searches</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-7 w-7 md:h-8 md:w-8 p-0"
            >
              <X className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {recentSearches.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-2 hover:bg-muted rounded-md cursor-pointer"
              >
                <div className="bg-muted rounded-full p-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.address}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center gap-3 p-2 hover:bg-muted rounded-md cursor-pointer">
              <div className="bg-primary/10 rounded-full p-2">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Browse artisans on map</p>
              </div>
            </div>
          </div>
        </Card>
      )} */}
    </div>
  );
}
