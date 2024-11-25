"use client"

import { useLocale } from '@/components/providers/LanguageProvider'
import { SubmitButton } from '@/components/ui/button'
import { FormInput, PasswordInput } from '@/components/ui/input'
import React, { useActionState } from 'react'
import { loginAction } from '../../app/(unauthenticated)/login/action'

function LoginForm() {
    const {dictionary}=useLocale()
    const [state, formAction]=useActionState(loginAction, {error:false})
  return (
    <form className="flex flex-col space-y-8 p-8" action={formAction}>
            <h1 className="text-3xl text-foreground">{dictionary["connect"]}</h1>
            <div className="flex space-x-1">
                <p className='text-xs text-secondary'>{dictionary["connectMessage"]}</p>
                <p className="text-neon font-semibold text-xs">UpperManage</p>
            </div>
            <FormInput placeholder={dictionary["email"]} error={state.error} required name='email'/>
            <PasswordInput placeholder={dictionary["password"]}error={state.error} required name='password'/>
            <SubmitButton>{dictionary["login"]}</SubmitButton>
            <div className="flex space-x-2 items-center">
                <hr className='text-secondary flex-1'/>
                <p className="text-sm text-secondary">{dictionary["or"]}</p>
                <hr className="text-secondary flex-1" />
            </div>
            <div className="flex space-x-2 justify-center text-secondary text-sm">
                <p>{dictionary["dontHaveAccount"]}</p>
                <a href="/register" className="font-semibold">{dictionary["register"]}</a>
            </div>
        </form>
  )
}

export default LoginForm