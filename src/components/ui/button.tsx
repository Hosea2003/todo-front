"use client"
import { cn } from "@/lib/utils"
import React from "react"
import { useFormStatus } from "react-dom"
import { ClipLoader, FadeLoader } from "react-spinners"

export type PrimaryButtonProps={
    loading?:boolean
}&React.ButtonHTMLAttributes<HTMLButtonElement>

function PrimaryButton({className, loading=false, children,...props}:PrimaryButtonProps){

    return (
        <button
            className={cn("px-4 py-3 text-xs text-background", 
                        "bg-primary rounded-full font-semibold",
                        "hover:bg-neon hover:text-white transition-all duration-500 ease-in-out",
                        loading?"bg-neon":"")}
            {...props} disabled={loading}>
            {loading ? (
                <ClipLoader size={15} color="white"/>
            ):(
                children
            )}
        </button>
    )
}

function SubmitButton(props:React.ButtonHTMLAttributes<HTMLButtonElement>){
    const state= useFormStatus()
    return (
        <PrimaryButton loading={state.pending} {...props}/>
    )
}

export {
    PrimaryButton, SubmitButton
}