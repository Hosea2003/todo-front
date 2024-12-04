import { Project } from '@/types/project'
import Link from 'next/link'
import React from 'react'
import { RiDeleteBack2Line } from 'react-icons/ri'

function ProjectItem({project}:{project:Project}) {
  return (
    <div className='flex justify-between p-2 border-1 border-secondary border-b'>
        <Link href={`projects/${project._id}`}>{project.title}</Link>
        <button>
            <RiDeleteBack2Line/>
        </button>
    </div>
  )
}

export default ProjectItem