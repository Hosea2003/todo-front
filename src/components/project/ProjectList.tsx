"use client"

import { useProjectsStore } from '@/store/store'
import React from 'react'
import ProjectItem from './ProjectItem'

function ProjectList() {
    const {projects}=useProjectsStore()
  return (
    <div className='flex flex-col max-w-[450px] w-full bg-light-gray rounded-md p-2'>
        {projects.map((project, index)=>(
            <ProjectItem project={project} key={index}/>
        ))}
    </div>
  )
}

export default ProjectList