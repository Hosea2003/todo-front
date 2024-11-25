import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const {locale}=await req.json()
    const response = NextResponse.json({message:`locale set to ${locale}`})
    response.cookies.set("locale", locale, { path: "/", httpOnly: false });
    return response
}