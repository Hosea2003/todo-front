"use client"

import { useLocale } from '@/components/providers/LanguageProvider'
import { SubmitButton } from '@/components/ui/button'
import { FormInput, PasswordInput } from '@/components/ui/input'
import React from 'react'

function RegisterPage() {
    const {dictionary}=useLocale()

  return (
    <div className='flex min-h-screen items-center justify-center'>
        {/* <img src="" alt="" className='hidden lg:block'/> */}
        <form className="flex flex-col space-y-8 p-8">
            <h1 className="text-3xl text-foreground">{dictionary["register"]}</h1>
            <div className="flex space-x-1">
                <p className='text-xs text-secondary'>{dictionary["registerMessage"]}</p>
                <p className="text-neon font-semibold text-xs">UpperManage</p>
            </div>
            <FormInput placeholder={dictionary["email"]}/>
            <PasswordInput placeholder={dictionary["password"]}/>
            <PasswordInput placeholder={dictionary["confirmPassword"]}/>
            <SubmitButton>{dictionary["create"]}</SubmitButton>
            <div className="flex space-x-2 items-center">
                <hr className='text-secondary flex-1'/>
                <p className="text-sm text-secondary">{dictionary["or"]}</p>
                <hr className="text-secondary flex-1" />
            </div>
            <div className="flex space-x-2 justify-center text-secondary text-sm">
                <p>{dictionary["haveAccount"]}</p>
                <a href="/login" className="font-semibold">{dictionary["login"]}</a>
            </div>
        </form>
    </div>
  )
}

export default RegisterPage