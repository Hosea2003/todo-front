import { Project, Task } from "@/types/project"
import axios from "axios"
import { getSession } from "next-auth/react"

export const BASE_URL=process.env.NEXT_PUBLIC_API_URL!

const dateKeyRx = /date/i;

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    transformResponse: (data) =>
        JSON.parse(data, (key, value) =>
          dateKeyRx.test(key) ? new Date(value) : value
        ),
})

axiosInstance.interceptors.request.use(async (config)=>{
    const session = await getSession()

    if(!session){
        // return redirect("/login")
    }

    const accessToken = session?.accessToken

    config.headers.Authorization=`Bearer ${accessToken}`

    return config
})

export async function getProjects(){
    return (await axiosInstance.get<Project[]>("project/list")).data
}

export async function addProject(data:Partial<Project>){
    return (await axiosInstance.post<Project>("project/create", data)).data
}

export async function getProjectDetails(projectId:string){
    return (await axiosInstance.get<Project>(`project/${projectId}`)).data
}

export async function addTask(projectId:string, task:{title:string, dueDate:string}){
    return (await axiosInstance.post<Task>(`project/${projectId}/addTask`, task)).data
}