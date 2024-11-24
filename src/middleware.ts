import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator"
import { match } from "@formatjs/intl-localematcher";
import { AppMiddleware } from "./types/middleware";
import { stackMiddleware } from "./lib/stack";

function getLocale(req:NextRequest){
    const defaultLocale = "fr-FR"
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
        response.headers.set("accept-language", locale)
        return middleware(req, response)
    }
}

export default stackMiddleware([i18Middleware])