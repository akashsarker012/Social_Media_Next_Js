import userModel from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

async function POST(request) {
  try {
    const isEmailExit = userModel.findOne({email})

    if(!isEmailExit){
      return NextResponse.json({message: "User Not found"})
    }
    const checkPass = bcryptjs.compare(password)

  } catch (error){
    NextResponse.json({message :error.message || error})
  }
}
