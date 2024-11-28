"use client"

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { VscLayoutSidebarRight } from "react-icons/vsc";
import { NavLink } from './link';
import { RiHome6Fill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { useTheme } from 'next-themes';
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useLocale } from '../providers/LanguageProvider';
import CustomSelect, { OptionType } from './select';
import { useSize } from '@/lib/size';
import { useProject } from '../providers/ProjectProvider';

function Sidebar() {
    const [isCollapse, setCollapse]=useState(false)
    const {theme, setTheme} = useTheme()
    const {dictionary, locale, changeLocale}=useLocale()
    const {width}=useSize()
    const {projects} = useProject()

    useEffect(()=>{
        // equivalent of md in tailwind
        if(width<=768){
            setCollapse(true)
        }
    }, [width])

    const localeOptions = [
        {value:"fr-FR", label:"Français"},
        {value:"en-EN", label:"English"}
    ]

    function handleChangeLocale(localeOption:OptionType){
        changeLocale(localeOption.value)
    }
    
  return (
    <div className={cn('flex flex-col bg-sidebar rounded-md p-4 transition-all duration-200 ease-out', 
        isCollapse?"w-[65px]":"w-[250px]",
        !isCollapse && width<=768?"fixed top-0 left-0 bottom-0":"")}>
        <div className={cn("flex space-x-2", isCollapse?"justify-center":"justify-between")}>
            {!isCollapse &&(
                <Link className="text-lg font-semibold text-neon" href={"/"}>UpperManage</Link>
            )}
            <button onClick={()=>setCollapse(!isCollapse)}>
                <VscLayoutSidebarRight className='text-gray'/>
            </button>
        </div>
        <nav className="flex flex-col mt-10 space-y-2">
            <NavLink href='/' icon={<RiHome6Fill/>} label={dictionary["home"]} isCollapse={isCollapse}/>
            <hr className="flex-1 text-secondary"/>
            <NavLink href='/projects' icon={<AiFillProject/>} label={dictionary["projects"]} isCollapse={isCollapse}/>
            {!isCollapse && (
                <ul className="flex-1 ps-7">
                    {projects.map((project, index)=>(
                        <NavLink href={`/project/${project._id}`} label={project.title}/>
                    ))}
                </ul>
            )}
            <hr className="flex-1 text-secondary" />
            {!isCollapse &&(
                <span className="text-xs text-secondary">{dictionary["settings"]}</span>
            )}
            <div className={cn("flex px-4 py-2", isCollapse?"justify-center":"justify-between")}>
                {!isCollapse && (<span className="text-xs">{dictionary["mode"]}</span>)}
                <button onClick={()=>setTheme(prev=>prev==="light"?"dark":"light")}>
                    {theme==="light"?(
                        <BsFillMoonStarsFill/>
                    ):(
                        <MdSunny/>
                    )}
                </button>
            </div>
            {!isCollapse && (
                <CustomSelect options={localeOptions} defaultValue={
                    localeOptions.filter(l=>l.value===locale)[0]
                }
                    onChange={(newValue)=>handleChangeLocale(newValue)}/>
            )}
        </nav>
    </div>
  )
}

export default Sidebar