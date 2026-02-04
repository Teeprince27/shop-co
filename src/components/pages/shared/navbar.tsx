"use client";

import Link from "next/link";
import React, { useState } from "react";

// import { HEADER_FONT } from '@/lib/font'
import { CircleUserRound, Menu, Search, ShoppingCart, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Logo from "./logo";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Make Alert close on click */}
      {/* SignUpAlert */}
      {isVisible && (
        <div className="bg-foreground text-background w-full">
          <div className="flex items-center justify-center">
            <p className="flex-1 text-center text-sm">
              Sign up and get 20% off your first order
              <span className="ml-2">
                <Link href="/" className="underline">
                  Sign Up Now
                </Link>
              </span>
            </p>
            <Button variant="ghost" size="icon" onClick={handleClose}>
              <X />
            </Button>
          </div>
        </div>
      )}
      {/* NavBarContainer */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        {/* Logo */}
        <div className="flex items-center justify-between gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
          <Logo />
        </div>
        <div className="flex hidden items-center justify-center gap-5 md:flex">
          {/* NavItems  */}
          <div className="flex items-center justify-center gap-5">
            <Link href="/shop">Shop</Link>
            <Link href="/">On Sale</Link>
            <Link href="/">New Arrivals</Link>
            <Link href="/">Brands</Link>
          </div>

          {/* SearchBar */}
          <Input
            placeholder="Search for Products..."
            className="bg-accent max-w-[350px] flex-1 border-none shadow-none"
          />
        </div>

        {/* UserSection */}
        <div className="flex items-center justify-center">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart />
          </Button>
          <Button variant="ghost" size="icon">
            <CircleUserRound />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
