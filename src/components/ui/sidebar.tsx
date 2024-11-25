"use client"

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react'
import { VscLayoutSidebarRight } from "react-icons/vsc";
import { NavLink } from './link';
import { RiHome6Fill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { useTheme } from 'next-themes';
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useLocale } from '../providers/LanguageProvider';
import CustomSelect, { OptionType } from './select';

function Sidebar() {
    const [isCollapse, setCollapse]=useState(false)
    const {theme, setTheme} = useTheme()
    const {dictionary, locale, changeLocale}=useLocale()

    const localeOptions = [
        {value:"fr-FR", label:"Français"},
        {value:"en-EN", label:"English"}
    ]

    function handleChangeLocale(localeOption:OptionType){
        changeLocale(localeOption.value)
    }
    
  return (
    <div className={cn('flex flex-col bg-sidebar rounded-md p-4', isCollapse?"w-fit":"w-[250px]")}>
        <div className="flex justify-between space-x-2">
            <Link className="text-lg font-semibold text-neon" href={"/"}>UpperManage</Link>
            <button>
                <VscLayoutSidebarRight className='text-gray'/>
            </button>
        </div>
        <nav className="flex flex-col mt-10 space-y-2">
            <NavLink href='/' icon={<RiHome6Fill/>} label={dictionary["home"]} isCollapse={isCollapse}/>
            <hr className="flex-1 text-secondary"/>
            <NavLink href='/projects' icon={<AiFillProject/>} label={dictionary["projects"]} isCollapse={isCollapse}/>
            <ul className="flex-1 ps-7">
                <NavLink href='/projects/1' label='Projet 1'/>
            </ul>
            <hr className="flex-1 text-secondary" />
            <span className="text-xs text-secondary">{dictionary["settings"]}</span>
            <div className="flex justify-between px-4 py-2">
                <span className="text-xs">{dictionary["mode"]}</span>
                <button onClick={()=>setTheme(prev=>prev==="light"?"dark":"light")}>
                    {theme==="light"?(
                        <BsFillMoonStarsFill/>
                    ):(
                        <MdSunny/>
                    )}
                </button>
            </div>
            <CustomSelect options={localeOptions} defaultValue={
                localeOptions.filter(l=>l.value===locale)[0]
            }
                onChange={(newValue)=>handleChangeLocale(newValue)}/>
        </nav>
    </div>
  )
}

export default Sidebar