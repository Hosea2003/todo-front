import { NextRequest, NextResponse } from "next/server"
import { NextMiddlewareResult } from "next/dist/server/web/types";

export type AppMiddleware = (
    req:NextRequest,
    res:NextResponse
)=>NextMiddlewareResult | Promise<NextMiddlewareResult>

export type MiddlewareFactory = (middleware:AppMiddleware)=>AppMiddleware