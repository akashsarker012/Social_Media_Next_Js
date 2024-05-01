"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Avatar({ imageURL, userId, disable,height,width ,className}) {
  const path = usePathname();
  return (
    <div>
      <Link className={`${className}`} href={disable ? path : "/" + userId}>
        {imageURL ? (
          <img className={`rounded-full h-16 w-16  ${className}`}
          width={20}
          height={20}
            alt="profile"
            src={imageURL}
          />
        ) : (
          <FaUserCircle className=" w-16 h-16 mx-auto" />
        )}
      </Link>
    </div>
  );
}
export default Avatar;
