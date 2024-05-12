"use client";
import PostDisplay from "@/components/PostDisplay";
import Profilecard from "@/components/ProfileCard";
import UploadPost from "@/components/UploadPost";
import { ContextData } from "@/providers/providers";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

export default function Home() {
  const { user, fetchCurrentUserDetails } = useContext(ContextData);
// console.log(user, "user");

  const [postData, setPostData] = useState([]);
  // console.log(postData, "postData");
  const fetchPost = async () => {
    const response = await axios.get("/api/post");
    setPostData(response?.data?.data || []);
  };

  useEffect(() => {
    // fetchCurrentUserDetails()
    fetchPost();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 lg:grid grid-cols-[260px,1fr,260px] gap-7 h-full">
      <section className=" bg-slate-100 p-6 h-fit">
        <Profilecard
          _id={user?._id}
          profile_pic={user?.profile_pic}
          firstName={user?.firstName}
          lastName={user?.lastName}
          occupation={user?.occupation}
          location={user?.location}
          friends={user?.friends}
        />
      </section>
      <section className="bg-slate-100 p-4">
        <UploadPost _id={user?._id} profile_pic={user?.profile_pic} />

        <div>
          {postData.map((post, index) => {
            return (
              <PostDisplay
                data={post}
                key={post._id}
                // handleAddFriend={handleAddFriend}
              />
            );
          })}
        </div>
      </section>
      <section className=" bg-red-400 h-1">current user profile</section>
    </div>
  );
}
