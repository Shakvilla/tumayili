"use client";

import {
  X,
  ChevronRight,
  Star,
  Settings,
  CreditCard,
  Gift,
  Shield,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface ProfileViewProps {
  show: boolean;
  onClose: () => void;
}

export default function ProfileView({ show, onClose }: ProfileViewProps) {
  const menuItems = [
    { icon: Star, label: "Favorite Artisans", action: () => {} },
    { icon: Settings, label: "Settings", action: () => {} },
    { icon: CreditCard, label: "Payment Methods", action: () => {} },
    { icon: Gift, label: "Commissions", action: () => {} },
    { icon: Shield, label: "Verification", action: () => {} },
    { icon: HelpCircle, label: "Help Center", action: () => {} },
  ];

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-background z-30 shadow-xl transform transition-transform duration-300 ease-in-out ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-3 md:p-4 border-b">
          <h2 className="text-base md:text-lg font-semibold">Profile</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 md:h-9 md:w-9"
          >
            <X className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>

        <div className="p-3 md:p-4 flex items-center gap-3 md:gap-4">
          <Avatar className="h-12 w-12 md:h-16 md:w-16">
            <AvatarImage
              src="/placeholder.svg?height=64&width=64&text=👤"
              alt="Profile"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium text-sm md:text-base">John Doe</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              ★ 4.85 · 150 crafts sold
            </p>
          </div>
        </div>

        <Separator />

        <div className="flex-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="px-4">
              <Button
                variant="ghost"
                className="w-full justify-start py-4 md:py-6 text-sm md:text-base font-normal"
                onClick={item.action}
              >
                <item.icon className="h-4 w-4 md:h-5 md:w-5 mr-3" />
                {item.label}
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 ml-auto" />
              </Button>
              <Separator />
            </div>
          ))}
        </div>

        <div className="p-3 md:p-4 border-t">
          <Button variant="outline" className="w-full text-sm md:text-base">
            My Account
          </Button>
        </div>
      </div>
    </div>
  );
}
