"use client"

import { useSession } from 'next-auth/react'
import React from 'react'
import { LoaderPage } from './ui/loader'

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

export default Maincontent