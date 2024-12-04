"use client";

import { getProjectDetails } from '@/service/api'
import { Project, Task } from '@/types/project'
import React, { useEffect, useState } from 'react'
import { TaskList } from '../task/TaskList';
import AddTask from '../form/AddTask';
import { useLocale } from '../providers/LanguageProvider';

function ProjectDetails({projectId}:{projectId:string}) {
    const [project, setProject]=useState<Project|undefined>(undefined)
    const {dictionary}=useLocale()

    useEffect(()=>{
        async function fetchProjectDetails(){
            const response = await getProjectDetails(projectId)
            setProject(response)
        }
        fetchProjectDetails()
    }, [])

    function addTask(task:Task){
        setProject(prev=>{
            if(!prev)return prev;

            return{
                ...prev,
                tasks:[...prev.tasks, task]
            }
        })
    }

  return (
    <>
        <h1 className="font-bold text-3xl">{project?.title}</h1>
        {/* add project */}
        <h2 className="text-lg font-semibold">{dictionary["addTask"]}</h2>
        {project && <AddTask addTask={addTask} projectId={project._id}/>}
        {/* projects list */}
        <TaskList tasks={project?.tasks}/>
    </>
  )
}

export default ProjectDetails