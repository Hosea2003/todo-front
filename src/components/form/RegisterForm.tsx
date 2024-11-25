"use client"

import { registerAction } from '@/app/(unauthenticated)/register/action'
import { useLocale } from '@/components/providers/LanguageProvider'
import { SubmitButton } from '@/components/ui/button'
import { FormInput, PasswordInput } from '@/components/ui/input'
import React, { useActionState } from 'react'

function RegisterForm() {
    const {dictionary}=useLocale()
    const [state, formAction]=useActionState(registerAction, {})

  return (
    <form className="flex flex-col space-y-8 p-8" action={formAction}>
            <h1 className="text-3xl text-foreground">{dictionary["register"]}</h1>
            <div className="flex space-x-1">
                <p className='text-xs text-secondary'>{dictionary["registerMessage"]}</p>
                <p className="text-neon font-semibold text-xs">UpperManage</p>
            </div>
            <FormInput placeholder={dictionary["email"]} name='email'/>
            <PasswordInput placeholder={dictionary["password"]} name='password'/>
            <PasswordInput placeholder={dictionary["confirmPassword"]} name='confirm'/>
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
  )
}

export default RegisterForm