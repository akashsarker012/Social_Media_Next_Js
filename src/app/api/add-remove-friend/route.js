import { userDetailsToken } from "@/helpers/userDetailsToken";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(request){

    try {
        const user = await userDetailsToken(request)
        const { friendId } = await request.json()
        const currentUserfriendList = user.friends
        if(!currentUserfriendList.includes(friendId)){
            const addFriend = await userModel.updateOne({ _id : user._id }, {
                $push : { friends : friendId }
            })
            await userModel.updateOne({ _id : friendId }, {
                $push : { friends : user._id }
            })
            return NextResponse.json({
                message : "Friend Added",
                data : addFriend,
                success : true
            })
        }

        const removeFriend = await userModel.updateOne({ _id : user._id }, {
            $push : { friends : friendId }
        })
        await userModel.updateOne({ _id : friendId }, {
            $push : { friends : user._id }
        })
        return NextResponse.json({
            message : "Friend delete",
            data : removeFriend,
            success : true
        })
        
    } catch (error) {
        NextResponse.json({message : error.message || error,
            message : "Something went wrong",
            error : true
        })   
    }
}