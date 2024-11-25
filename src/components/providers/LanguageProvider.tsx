"use client"

import { DictKey } from "@/lib/dictionaries"
import axios from "axios"
import React, { createContext, useContext, useState } from "react"

type LangContextProps={
    dictionary:Record<string, string>,
    changeLocale:(newLocale:string)=>void,
    locale:string
}

const LangContext = createContext<LangContextProps>({} as LangContextProps)

export function LangProvider(
    {children, dictionaries, locale}:{
        children:React.ReactNode,
        dictionaries:Record<DictKey, any>,
        locale:string
    }){
        const [dictionary, setDictionary]=useState(()=>{
            const lang = locale.split('-')[0] as DictKey
            return dictionaries[lang]
        })
        const [_locale, setLocale]=useState(locale)

        async function changeLocale(newLocale:string){
            const lang = newLocale.split('-')[0] as DictKey
            await axios("/api/locale", {
                method:"POST",
                data:{locale:newLocale}
            })
            setDictionary(dictionaries[lang])
            setLocale(newLocale)
        }

        const data={
            dictionary, changeLocale, locale:_locale
        }

        return (
            <LangContext.Provider value={data}>
                {children}
            </LangContext.Provider>
        )
    }

export function useLocale(){
    return useContext(LangContext)
}