import { Project } from "@/types/project"
import axios from "axios"
import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import { redirect } from "next/navigation"

export const BASE_URL=process.env.NEXT_PUBLIC_API_URL!

const axiosInstance = axios.create({
    baseURL:BASE_URL
})

axiosInstance.interceptors.request.use(async (config)=>{
    const session = await getServerSession()
    console.log(session)

    if(!session){
        // return redirect("/login")
    }

    const accessToken = session?.accessToken

    config.headers.Authorization=`Bearer ${accessToken}`

    return config
})

export function getProjects(){
    return axiosInstance.get<Project[]>("project/list")
}