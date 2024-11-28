import { ProjectProvider } from '@/components/providers/ProjectProvider'
import Sidebar from '@/components/ui/sidebar'
import { getProjects } from '@/service/api'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'
import React from 'react'

async function ProtectedLayout({children}:{children:React.ReactNode}) {
    // const projects = (await getProjects()).data
    const session = await getServerSession()
    console.log(session)

  return (
    <div className="flex space-x-4 min-h-screen p-">
        {/* <ProjectProvider initialProjects={projects}>
            <Sidebar/>
            {children}
        </ProjectProvider> */}
    </div>
  )
}

export default ProtectedLayout