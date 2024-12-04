"use client"

import { addProject } from "@/service/api"
import { Project } from "@/types/project"

type AddProjectState={
    error?:boolean,
    project?:Project
}

export async function addProjectAction(state:AddProjectState, formData:FormData):Promise<AddProjectState>{
    try{
        const response = await addProject({
            title:formData.get("title")?.toString()
        })
        return {error:false, project:response}
    }
    catch(error){
        console.log(error)
        return {error:true, project:undefined}
    }
}