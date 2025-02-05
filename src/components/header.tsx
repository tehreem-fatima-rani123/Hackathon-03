"use client"

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button"; 
import { FaUserLarge } from "react-icons/fa6";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchBar from "./searchbaar";
// import Dropdown from "./categorysdropdaown";
export default function Header() {
  return (
    <>
      <div className="bg-white w-full h-[74px] flex justify-between items-center max-w-screen-4xl px-4 md:px-56 lg:px-[135px] font-sans font-semibold text-[#636270] border border-b-[1px] border-b-gray-300">
        {/* Desktop Links */}
        <ul className="hidden md:block">
          <li className="space-x-8 text-lg">
            <Link href="/" className="hover:text-[#007580]">Home</Link>
            <Link href="/product" className="hover:text-[#007580]">Shop</Link>
            <Link href="/product" className="hover:text-[#007580]">Product</Link>
            <Link href="/faqs" className="hover:text-[#007580]">Pages</Link>
            <Link href="/about" className="hover:text-[#007580]">About</Link>
                      </li>
        </ul>
{/* 
 

        {/* Contact Info */}
        <div className="text-lg">
          <Link href="/contact">
            <span className="text-[#636270] hover:text-[#007580]">Contact:</span>
          </Link>
          <span className="text-[#272343]">(808) 555-0111</span>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden flex justify-between items-center">
            <FaBars size={18} />
          </SheetTrigger>
          <SheetContent>
            <ul>
              <li className="my-8 flex flex-col font-sans font-semibold text-[#272343]">
                <Link href="/" className="hover:text-[#007580] my-3">Home</Link>
                <Link href="/product" className="hover:text-[#007580] my-3">Shop</Link>
                <Link href="/product" className="hover:text-[#007580] my-3">Product</Link>
                <Link href="/faqs" className="hover:text-[#007580] my-3">Pages</Link>
                <Link href="/about" className="hover:text-[#007580] my-3">About</Link>
                <div className="flex justify-center w-full sm:w-auto">
  <SearchBar />
</div>
<SignedOut>
<SignInButton>
<Button  className="border-none h-1 w-7 hover:bg-[#F0F2F3]  bg-white text-black">Sign In</Button>

</SignInButton>
</SignedOut>
<SignedIn>
<UserButton />
</SignedIn>
              
                </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
