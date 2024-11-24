"use client"

import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import Maincontent from './content'

function MainLayout({children}:{children:ReactNode}) {
  return (
    <SessionProvider>
        <Maincontent>{children}</Maincontent>
    </SessionProvider>
  )
}

export default MainLayout