import { Project } from "@/types/project"
import { create } from "zustand"

type ProjectsStore={
    projects:Project[]
}

type ProjectsStoreAction={
    setProjects:(projects:Project[])=>void;
    addProject:(project:Project)=>void
}

export const useProjectsStore = create<ProjectsStore & ProjectsStoreAction>((set)=>({
    projects:[],
    setProjects:(projects:Project[])=>set({projects}),
    addProject:(project:Project)=>set((state)=>({projects:[...state.projects, project]}))
}))