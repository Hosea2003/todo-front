"use client"

import { useSession } from 'next-auth/react'
import React from 'react'
import { FadeLoader } from 'react-spinners'

function Maincontent({children}:{children:React.ReactNode}) {
    const session = useSession()

    if(session.status==="loading"){
        return <FadeLoader/>
    }

  return (
    <>
        {children}
    </>
  )
}

export default Maincontent