import { userDetailsToken } from "@/helpers/userDetailsToken";
import postModel from "@/models/postModel";
import { NextResponse } from "next/server";
import { comment } from "postcss";

export async function POST(request) {
    try {
        const user = await userDetailsToken(request)

        if(!user){
            return NextResponse.json({
                message : "Please login",
                error : true
            })
        }
        const { postId , description } = await request.json()
        const payload = {
            description : description,
            userId : user._id
        }
        const commentPost = await postModel.updateOne({ _id : postId }, {
            $push : { comment : payload }
        })
        return NextResponse.json({
            message : "comment post",
            data : commentPost
        })

    } catch (error) {
        return NextResponse.json({
            message : error.message || error,
            error : true
        })
    }
}