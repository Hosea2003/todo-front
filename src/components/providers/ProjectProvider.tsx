"use client"

import { Project } from "@/types/project"
import React, { createContext, useContext, useState } from "react"

type ProjectContextProps={
    projects:Project[],
    addProject:(project:Project)=>void
}

const ProjectContext = createContext<ProjectContextProps>({} as ProjectContextProps)

export function ProjectProvider(
    {children, initialProjects}:{
        children:React.ReactNode, initialProjects:Project[]
    }){
        const [projects, setProjects]=useState(initialProjects)

        function addProject(project:Project){
            setProjects([...projects, project])
        }

        const data={
            projects, addProject
        }

        return (
            <ProjectContext.Provider value={data}>
                {children}
            </ProjectContext.Provider>
        )
    }

export function useProject(){
    return useContext(ProjectContext)
}