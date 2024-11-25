"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export type NavLinkProps={
    icon?:React.ReactNode,
    href:string,
    isCollapse?:boolean,
    label:string
}

export function NavLink({href, icon,isCollapse, label}:NavLinkProps){
    const pathname = usePathname()
    const isActive = pathname===href

    return (
        <Link href={href} className={cn(
            "flex items-center space-x-4 py-2 rounded-md hover:bg-gray text-lg", 
            isActive?"bg-light-gray font-semibold":"",
            isCollapse?"justify-center px-0":"px-4")}>
            {icon}
            {!isCollapse && (<span className="text-xs">{label}</span>)}
        </Link>
    )
}