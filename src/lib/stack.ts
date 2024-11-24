import { AppMiddleware, MiddlewareFactory } from "@/types/middleware";
import { NextRequest, NextResponse } from "next/server";

export function stackMiddleware(functions:MiddlewareFactory[]=[], index:number=0):AppMiddleware{
    const current = functions[index]
    if(current){
        const next =stackMiddleware(functions, index+1)
        return current(next)
    }
    return (req:NextRequest, res:NextResponse)=>{return res}
}