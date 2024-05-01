
import { NextResponse } from "next/server";
import connectDB from "@/connectDB/db";
import { userDetailsToken } from "@/helpers/userDetailsToken";

connectDB()
export async function GET(request){
    try {
        const user =  await userDetailsToken(request)
        console.log(user, 'user');  
        return NextResponse.json({
            message : "Current user Details",
            data : user
        })
    } catch (error) {
        return NextResponse.json({
            message : error.message || error,
            error : true
        })
    }
}