import { SubmitButton } from '@/components/ui/button'
import { FormInput, PasswordInput } from '@/components/ui/input'
import React from 'react'

function LoginPage() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
        {/* <img src="" alt="" className='hidden lg:block'/> */}
        <form className="flex flex-col space-y-8 p-8">
            <h1 className="text-3xl text-foreground">Se connecter</h1>
            <div className="flex space-x-1">
                <p className='text-xs text-secondary'>Gerer mieux vos projets avec</p>
                <p className="text-neon font-semibold text-xs">UpperManage</p>
            </div>
            <FormInput placeholder='Email'/>
            <PasswordInput placeholder='Mot de passe'/>
            <SubmitButton>Se connecter</SubmitButton>
        </form>
    </div>
  )
}

export default LoginPage