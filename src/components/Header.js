"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import UserButton from "./UserButton";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleUserButton = () => {
    setShow(true);
  };
  return (
    <div className="bg-slate-100 absolute top-0 left-0 w-full">
    
    <div className="flex max-w-6xl mx-auto min-h-[80px] flex-wrap items-center justify-between lg:gap-y-2 gap-4 w-full">
      <div>
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" width={200} height={20} />
        </Link>
      </div>

      <div>
        <ul className=" flex items-center  ">
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link
              href="/"
              className="text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold"
            >
              Home
            </Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link
              href="/find-friends"
              className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
            >
              Find Friend
            </Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link
              href="javascript:void(0)"
              className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
            >
              Message
            </Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link
              href="javascript:void(0)"
              className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
            >
              Notification
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-x-6 ">
        <div className="flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 ">
          <input
            type="text"
            placeholder="Search something..."
            className="w-full text-sm bg-transparent outline-none pr-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="cursor-pointer fill-gray-600"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </div>

        <div className="flex items-center space-x-8 relative">
          <button
            onClick={handleUserButton}
            className="px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]"
          >
            Sign In
          </button>
          {show && <UserButton className=" absolute top-14 right-6" />}
        </div>
      </div>
    </div>
    </div>
  );
}
