"use client";

import { Bell, Heart, Search, Settings2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="w-full bg-white border-b border-[rgba(195,212,233,0.4)] px-4 sm:px-6 md:px-8 py-4 sm:py-6">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap w-full">
        {/* Logo */}
        <h1 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] text-[#3563E9]">
          MORENT
        </h1>

        {/* Search */}
        <div className="relative w-full mt-4 md:mt-0">
          <Search className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#596780]" />
          <Input
            className="h-11 rounded-[70px] border-[rgba(195,212,233,0.4)] pl-14 pr-12 text-sm font-medium text-[#596780]"
            placeholder="Search something here"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <Settings2 className="h-6 w-6 text-[#596780]" />
          </Button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Like Button */}
          <Button
            size="icon"
            variant="outline"
            className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)] opacity-80"
          >
            <Heart className="h-6 w-6 text-[#596780]" />
          </Button>

          {/* Notification Button */}
          <div className="relative">
            <Button
              size="icon"
              variant="outline"
              className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)] opacity-80"
            >
              <Bell className="h-6 w-6 text-[#596780]" />
            </Button>
            <span className="absolute right-1 top-0.5 h-[11px] w-[11px] rounded-full bg-[#FF4423]" />
          </div>

          {/* Settings Button */}
          <Button
            size="icon"
            variant="outline"
            className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)] opacity-80"
          >
            <Settings2 className="h-6 w-6 text-[#596780]" />
          </Button>

          {/* Profile */}
          <Avatar className="h-11 w-11">
            <AvatarImage src="/profile.png" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
