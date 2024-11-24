"use client"

import { DictKey } from "@/lib/dictionaries"
import React, { createContext, useContext, useState } from "react"

type LangContextProps={
    dictionary:Record<string, string>,
    changeLocale:(newLocale:string)=>void
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

        function changeLocale(newLocale:string){
            const lang = newLocale.split('-')[0] as DictKey
            setDictionary(dictionaries[lang])
        }

        const data={
            dictionary, changeLocale
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