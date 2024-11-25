"use client"

import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

type FormInputProps = {
    error?:boolean
}&React.InputHTMLAttributes<HTMLInputElement>

const FormInput=React.forwardRef<
        HTMLInputElement,
        FormInputProps
    >(({className, error, ...props}, ref)=>(
        <input ref={ref} 
            className={cn(
                'border border-secondary rounded-lg title p-2 outline-none text-sm',
                error?"border-red-500":"", 
                className)} 
            {...props}/>
    ))

const PasswordInput=React.forwardRef<
    HTMLInputElement,
    FormInputProps
>(({className, type="password", ...props}, ref)=>{
    const [inputType, setInputType]=useState(type)

    const handleShowPassword=()=>{
        setInputType(prev=>prev==="password"?"text":"password")
    }

    return (
        <div className="flex relative">
            <FormInput className="flex-1" ref={ref} type={inputType} {...props}/>
            <button type="button" className="absolute top-0 bottom-0 right-2" onClick={()=>handleShowPassword()}>
                {inputType==="password"?(
                    <IoEyeSharp/>
                ):(
                    <IoEyeOff/>
                )}
            </button>
        </div>
    )
})

export {
    FormInput,
    PasswordInput
}