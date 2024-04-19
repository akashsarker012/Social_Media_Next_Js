import { NextResponse } from "next/server";

async function POST(request) {
  try {

  } catch (error){
    NextResponse.json({message :error.message || error})
  }
}
