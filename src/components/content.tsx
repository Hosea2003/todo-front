"use client"

import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { LoaderPage } from './ui/loader'
import Sidebar from './ui/sidebar'
import { useProjectsStore } from '@/store/store'
import { getProjects } from '@/service/api'

function Maincontent({children}:{children:React.ReactNode}) {
    const session = useSession()

    if(session.status==="loading"){
        return <LoaderPage/>
    }

  return (
    <>
        {children}
    </>
  )
}

export function AuthenticatedContent({children}:{children:React.ReactNode}){
  const {setProjects}=useProjectsStore()

  useEffect(()=>{
    async function fetchProjects(){
      const response = await getProjects()
      setProjects(response)
    }
    fetchProjects()
  },[])

  return (
    <>
      <Sidebar/>
      {children}
    </>
  )
}

export default Maincontent