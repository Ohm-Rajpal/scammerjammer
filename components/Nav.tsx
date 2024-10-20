"use client";

import Link from "next/link";

import Image from "next/image";
import logo from "@/assets/logo.png";


export const Nav = ({ replace }: { replace: boolean }) => {
  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border pr-20"
      }
    >
      {/* Logo, directs to home */}
      <div>
      <Link href="/">
        <Image 
          src={logo} 
          alt="logo" 
          className="rounded-full w-10 xs:w-5 md:w-10 lg:w-15 xl:w-10" // Responsive width and height
          priority={true}
        />
      </Link>

      </div>
      

      {/* Navigation Links */}
      <div className={"ml-auto flex items-center gap-1 text-xs lg:text-base"}>
        <Link href="/ " className="ml-4 font-medium hover:underline">
          Home 
        </Link>

        <Link href="/about" className="ml-4 font-medium hover:underline">
          About 
        </Link>

        {/* Try Us Now Page */}
        <Link href="/tryusnow" className=" font-medium ml-4  hover:underline">
          Try Us Now
        </Link>

        {/* <Link href="/team" className="ml-4 font-medium hover:underline">
          Meet Our Team 
        </Link> */}

        {/* Conditionally render Login Page based on the 'replace' prop */}
        {/* {!replace && (
          <Link href="/login" className="ml-4 font-medium hover:underline">
            Login
          </Link>        
        )} */}

        { /* Register */ }
        {/* <Link href='/register' className="ml-4 font-medium hover:underline">
          Register
        </Link> */}

        {/* {replace && (
          <Link href="/logout" className="ml-4 font-medium hover:underline">
            Log out
          </Link>
        )} */}

      </div>
    </div>
  );
};
