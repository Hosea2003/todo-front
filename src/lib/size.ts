import { useEffect, useState } from "react"

export type WindowSize={
    width:number,
    height:number
}

export function useSize(){
    const [size, setSize]=useState<WindowSize>({
        width:window.innerWidth,
        height:window.innerHeight
    })

    useEffect(()=>{
        const handleResize=()=>{
            setSize({
                width:window.innerWidth,
            height:window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)

        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return size
}