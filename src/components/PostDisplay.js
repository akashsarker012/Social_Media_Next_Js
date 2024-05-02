import React, { useContext, useState } from 'react'
import Avatar from './Avatar';
import Image from 'next/image';
import Divider from './Divider';
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { ContextData } from '@/providers/providers';
import { AiFillLike } from "react-icons/ai";
import axios from 'axios';

export default function PostDisplay({ data }) {
    console.log(data, 'data');
    const {user, fetchCurrentUserDetails} = useContext(ContextData)
    const [likeData, setLikeData] = useState(data?.like || []);

    const [commentData, setCommentData] = useState([])
    const currentUserLike = likeData.includes(user?._id)
    const handleLike = async() => {
        const payload = {
            _id : data?._id
        }
        const response = await axios.post(`api/post/like`,payload)
        setLikeData(response.data.data)
    }
    return (
        <div className='bg-white p-4 my-6'>
            <div className='flex gap-3 items-center justify-between'>
                <div className='flex gap-3 items-center'>
                    <Avatar
                        userId={data.userId._id}
                        imageURL={data.userId.profile_pic}
                        width={40}
                        height={40}
                    />
                    <div>
                        <p className='font-bold'>{data.userId.firstName} {data.userId.lastName}</p>
                        <p className='text-xs'>{data.userId.occupation}</p>
                    </div>
                </div>
            </div>

            <p className='py-3'>
                {data.description}
            </p>

            <div className='w-full h-full'>
                {
                    data.image && (
                        <Image
                            src={data.image}
                            width={1000}
                            height={1000}
                            alt='post' />
                    )
                }
            </div >
            <div className='text-sm flex items-center justify-between mt-3'>
             {/**like count */}
            <div>
                {likeData.length  === 0 ? "You're first to like" : likeData.length + " Likes"  }
            </div>

            {/**comment count */}
            <div>
                {commentData.length} comment
            </div>

        </div>

            <Divider />
            <div className='flex items-center justify-around py-2'>
                <div   className=' flex items-center gap-2 cursor-pointer'>
                    {
                        !currentUserLike ? (
                            <AiOutlineLike onClick={handleLike} className=' w-5 h-5' />
                        ):
                        <AiFillLike onClick={handleLike} className=' w-5 h-5 text-blue-500 ' />
                    }
                    <p className={` ${currentUserLike ? 'text-blue-500' : ''}`}>Like</p>
                </div>
                <div className=' flex items-center gap-2 '>
                    <MdOutlineInsertComment className=' w-5 h-5' />
                    <p>Comment</p>
                </div>
            </div>
        </div>
    );
}
