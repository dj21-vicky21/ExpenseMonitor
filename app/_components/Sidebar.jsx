import React from 'react'
import { cn } from '@/lib/utils'
import { CircleDollarSign, LayoutDashboard, PackageSearch } from 'lucide-react'

function Sidebar({ className }) {

    const menu = [
        { name: "Dashboard", icon: <LayoutDashboard size={14} /> },
        { name: "Expense", icon: <CircleDollarSign size={14} /> },
        { name: "Report", icon: <PackageSearch size={14} /> },
    ]

    return (
        <div className={cn('md:w-64  md:border-r border-r-gray ', className)}>
            <ul>
                {menu.map((menu, index) =>
                    <li key={index} className={cn("relative flex gap-1 mb-2 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",)} >{menu.icon} {menu.name}</li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar