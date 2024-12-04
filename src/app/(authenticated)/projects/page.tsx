import AddProject from '@/components/form/AddProject'
import ProjectList from '@/components/project/ProjectList'
import React from 'react'

function ProjectsPage() {
  return (
    <div className='p-4 flex flex-col w-full items-center gap-10'>
        <AddProject/>
        <ProjectList/>
    </div>
  )
}

export default ProjectsPage