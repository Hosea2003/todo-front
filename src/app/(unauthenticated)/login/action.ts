import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"

export type LoginProps={
    error:boolean
}

export async function loginAction(state:LoginProps, formData:FormData){
    const response = await signIn("credentials", {
        email:formData.get('email'),
        password:formData.get("password"),
        callbackUrl:'/',
        redirect:true
    })

    if(response?.error){
        return {error:true}
    }

    redirect("/")
}