import ProjectDetails from '@/components/project/ProjectDetails'
import React from 'react'

async function ProjectPage({params}:{params:Promise<{id:string}>}) {
    const {id}=await params
  return (
    <div className='flex flex-col p-4 gap-8 w-full'>
        <ProjectDetails projectId={id}/>
    </div>
  )
}

export default ProjectPage