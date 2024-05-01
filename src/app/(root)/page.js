'use client'
import Profilecard from "@/components/ProfileCard";
import UploadPost from "@/components/UploadPost";
import { ContextData } from "@/providers/providers";
import React, { useContext } from "react";


export default function Home() {
  const user = useContext(ContextData);
  console.log(user, "user");

  return (
   <div className="container mx-auto p-4 lg:grid grid-cols-[280px,1fr,280px] gap-7 h-full">
    <section className=" bg-slate-100 p-6">
      <Profilecard
      _id={user?.user?._id}
      profile_pic={user?.user?.profile_pic}
      firstName={ user?.user?.firstName }
      lastName={ user?.user?.lastName }  
      occupation={user?.user?.occupation}
      location={user?.user?.location}
      friends={user?.user?.friends}
      />
    </section> 
     <section className="bg-slate-100 p-4">
      <UploadPost
            _id={user?.user?._id}
            profile_pic={user?.user?.profile_pic}
      />
    </section>
      <section className=" bg-red-400 h-1">
      current user profile
    </section>
   </div>
  );
}


