'use client';

import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import React, { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { CiCircleAlert } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SearchBar from "./searchbaar";

function Navbar() {
  const [cartCount] = useState(2);

  return (
    <div>
      {/* Top Bar */}
      <div className="w-full bg-[#272343] text-white text-sm py-3 px-4 md:px-8 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="flex items-center gap-3 mb-2 md:mb-0">
          <FaCheck />
          <span>Free shipping on all orders over $50</span>
        </div>

        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                Eng
                <Image src="/Vector.png" alt="angle" width={7} height={4} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div>Faqs</div>
          <div className="flex items-center gap-1">
            <CiCircleAlert />
            <span>Need Help</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-[#F0F2F3] py-4 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image src="/Logo Icon.png" alt="logo" width={40} height={40} />
            <div className="text-2xl font-semibold text-[#272343]">Comforty</div>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-auto flex-1 md:flex-grow-0 md:mx-8">
            <SearchBar />
          </div>

          {/* Cart and User Section */}
          <div className="flex items-center gap-6 md:gap-8">
            <Link href="/cart" className="relative flex items-center gap-3 bg-white py-2 px-4 rounded-lg shadow-md">
              <LuShoppingCart size={20} />
              <p className="text-[#272343] font-semibold">Cart</p>
              <div className="bg-[#007580] w-[20px] h-[20px] rounded-full text-white text-xs flex justify-center items-center">
                {cartCount}
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <SignedOut>
                <SignInButton>
                  <Button className="border-none hover:bg-[#E0E2E3] text-1xl bg-[#F0F2F3] text-black">Sign In</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
