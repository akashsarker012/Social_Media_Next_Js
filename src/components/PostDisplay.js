import React, { useContext, useState } from "react";
import Avatar from "./Avatar";
import Image from "next/image";
import Divider from "./Divider";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { ContextData } from "@/providers/providers";
import { AiFillLike } from "react-icons/ai";
import axios from "axios";

export default function PostDisplay({ data }) {
    // console.log(data, 'data');
    const { user, fetchCurrentUserDetails } = useContext(ContextData);
    const [likeData, setLikeData] = useState(data?.like || []);

    const [commentData, setCommentData] = useState([]);
    const [opencomment, setOpenComment] = useState(false);

    const [comment, setComment] = useState('')
    const currentUserLike = likeData.includes(user?._id);
    const handleLike = async () => {
        const payload = {
            _id: data?._id,
        };
        const response = await axios.post(`api/post/like`, payload);
        setLikeData(response.data.data);
    };

    const handleOpenCloseComment = async () => {
        setOpenComment((preve) => !preve);
    };
    return (
        <div className="bg-white p-4 my-6">
            <div className="flex gap-3 items-center justify-between">
                <div className="flex gap-3 items-center">
                    <Avatar
                        userId={data.userId._id}
                        imageURL={data.userId.profile_pic}
                        width={40}
                        height={40}
                    />
                    <div>
                        <p className="font-bold">
                            {data.userId.firstName} {data.userId.lastName}
                        </p>
                        <p className="text-xs">{data.userId.occupation}</p>
                    </div>
                </div>
            </div>

            <p className="py-3">{data.description}</p>

            <div className="w-full h-full">
                {data.image && (
                    <Image src={data.image} width={1000} height={1000} alt="post" />
                )}
            </div>
            <div className="text-sm flex items-center justify-between mt-3">
                {/**like count */}
                <div>
                    {likeData.length === 0
                        ? "You're first to like"
                        : likeData.length + " Likes"}
                </div>

                {/**comment count */}
                <div>{commentData.length} comment</div>
            </div>

            <Divider />
            <div className="flex items-center justify-around py-2">
                <div className=" flex items-center gap-2 cursor-pointer">
                    {!currentUserLike ? (
                        <AiOutlineLike onClick={handleLike} className=" w-5 h-5" />
                    ) : (
                        <AiFillLike
                            onClick={handleLike}
                            className=" w-5 h-5 text-blue-500 "
                        />
                    )}
                    <p className={` ${currentUserLike ? "text-blue-500" : ""}`}>Like</p>
                </div>
                <div
                    onClick={handleOpenCloseComment}
                    className=" cursor-pointer flex items-center gap-2 "
                >
                    <MdOutlineInsertComment className=" w-5 h-5" />
                    <p className="hover:text-blue-400 ">Comment</p>
                </div>
            </div>
            {opencomment && (
                <>
                    <div className=" p-4 bg-slate-200 rounded-2xl">
                        <div className="flex items-center gap-4 w-full">
                            <Avatar className={"w-10 h-10"}
                                userId={user._id}
                                imageURL={user.profile_pic}
                                width={40}
                                height={40}
                                alt={user.firstName}
                            />
                            <div className="w-full flex gap-1">
                                <input
                                    type="text"
                                    placeholder="type comment here..."
                                    className="bg-slate-100 rounded-full px-4 py-2 w-full outline-none"
                                // onChange={(e)=>setComment(e.target.value)}
                                // value={comment}
                                />
                                <button className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center ml-4 mt-4">
                        <Avatar className={"w-8 h-8"}
                            userId={user._id}
                            imageURL={user.profile_pic}
                            alt={user.firstName} />
                        <div className="flex flex-col">
                            <p className="font-semibold text-sm">
                                {user.firstName}
                            </p>
                            <p className="text-xs -mt-1">{user.occupation}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
