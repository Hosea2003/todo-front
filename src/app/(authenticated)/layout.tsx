import Sidebar from '@/components/ui/sidebar'
import React from 'react'

function ProtectedLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex space-x-4 min-h-screen p-1">
        <Sidebar/>
        {children}
    </div>
  )
}

export default ProtectedLayout