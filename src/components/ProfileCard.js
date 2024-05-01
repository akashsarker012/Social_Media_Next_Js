import React from 'react'
import Avatar from './Avatar'
import { IoLocationOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import Link from 'next/link';

export default function Profilecard({profile_pic,_id,disable,firstName,lastName,location,occupation,friends = [], profileViews = 0 , profileImpressions = 0 }) {
  return (
    <div >
  <div className='p-2'>
      {/**image  */}
        <div className='bg-slate-200 h-16 mb-10'>
            <div className='w-16 h-16 rounded-full bg-white mx-auto translate-y-8 shadow-md'>
                <Avatar
                    userId={_id}
                    imageURL={profile_pic}
                    width={64}
                    height={64}
                />
            </div>
        </div>

        {/**name and occupation */}
        <div className='text-center'>
            <p className='font-bold text-lg'>{firstName +" "+lastName}</p> 
            <p className='text-sm'>{occupation}</p>
        </div>

        <div className='p-[0.5px] bg-slate-200 my-2'></div>

          {/**name and friends */}
         <div className='grid gap-1'>
              <div className='flex items-center gap-3'>
                 <IoLocationOutline></IoLocationOutline>
                <p>{location}</p>
              </div>
              <Link href={'/find-friends'}  className='flex items-center gap-3'>
               <FaUserFriends/>
                <p className=' hover:text-blue-400 hover:underline'>Friends <span >{friends?.length}</span></p>
              </Link>
        {/****profile views and profile impresss */}
        <div className='grid gap-1'>
            <div className='flex justify-between items-center gap-3'>
                <p>Profile views</p>
                <p>{profileViews}</p>
            </div>

            <div className='flex justify-between items-center gap-3'>
                <p>Profile impressions</p>
                <p>{profileImpressions}</p>
            </div>

        </div>

         </div>
    </div>
    </div>
  )
}
