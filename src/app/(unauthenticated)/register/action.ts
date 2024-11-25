import { BASE_URL } from "@/service/api"
import { PairToken } from "@/types/user"
import axios from "axios"
import { redirect } from "next/navigation"

export type RegisterActionProps={
    
}

export async function registerAction(state:RegisterActionProps, formData:FormData){
    try{
        const response = await axios.post<PairToken>(BASE_URL+"/user/register",{
            email:formData.get('email'),
            password:formData.get('password')
        })

        redirect("/login")
    }
    catch(response:any){
        // console.log(response)
        return {}
    }

    
}