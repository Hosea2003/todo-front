import React from 'react'
import { FadeLoader } from 'react-spinners'

function Loader(){
    return <FadeLoader color='white'/>
}

export function LoaderPage() {
  return (
    <div className='w-full min-h-screen flex justify-center p-8 bg-inherit'>
        <Loader/>
    </div>
  )
}

export default Loader