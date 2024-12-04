import { AuthenticatedContent } from '@/components/content'
import React from 'react'

async function ProtectedLayout({children}:{children:React.ReactNode}) {

  return (
    <div className="flex space-x-4 min-h-screen">
        {/* <ProjectProvider initialProjects={projects}> */}
            <AuthenticatedContent>{children}</AuthenticatedContent>
        {/* </ProjectProvider> */}
    </div>
  )
}

export default ProtectedLayout