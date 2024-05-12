import connectDB from "@/connectDB/db";
import { userDetailsToken } from "@/helpers/userDetailsToken";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

connectDB();
export async function GET(request) {
    try {

        const user = await userDetailsToken(request)

        const friendList = user.friends

        // const friends  = []
        const friends  = friendList.map(async(userId)=>{
             const userDetails = await userModel.findOne({ _id : userId })
             return{
                 _id : userDetails._id,
                 firstName : userDetails.firstName,
                 lastName : userDetails.lastName,
                 email : userDetails.email,
                 occupation : userDetails.occupation,
                 location : userDetails.location,
                 profile_pic : userDetails.profile_pic
             }
         })
        return NextResponse.json({
            data : friends,
            message : "friends list",
            success : true
        })
        
    } catch (error) {
        return NextResponse.json({
            message : error.message || error,
            error : true
        })
    }
}