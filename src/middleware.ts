import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator"
import { match } from "@formatjs/intl-localematcher";
import { AppMiddleware } from "./types/middleware";
import { stackMiddleware } from "./lib/stack";
import withAuth from "next-auth/middleware";

function getLocale(req:NextRequest){
    const defaultLocale = "fr-FR"

    const cookieLocale = req.cookies.get("locale")?.value

    if(cookieLocale){
        return cookieLocale
    }

    const headers = {"accept-language":req.headers.get("accept-language")??defaultLocale}
    const languages = new Negotiator({headers}).languages()
    const locales = ['fr-FR', 'en-EN']

    const locale = match(languages, locales, defaultLocale)
    return locale
}

const i18Middleware=(middleware:AppMiddleware)=>{
    return async (req:NextRequest, res:NextResponse)=>{
        const locale = getLocale(req)
        const response = NextResponse.next()
        response.cookies.set("locale", locale, { path: "/", httpOnly: false });
        response.headers.set("accept-language", locale)
        return middleware(req, response)
    }
}

const _auth = withAuth(
    {
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	}
)

const authMiddleware =(middleware:AppMiddleware)=>{
    return async (req:NextRequest, res:NextResponse)=>{
        await (_auth as any)(req)
        return middleware(req, res)
    }
}

export const config={
    matcher:[
        "/"
    ]
}

export default stackMiddleware([i18Middleware, authMiddleware])