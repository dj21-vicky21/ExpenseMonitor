import React from 'react'
import { cn } from '@/lib/utils'
import { CircleDollarSign, LayoutDashboard, PackageSearch } from 'lucide-react'
import Link from 'next/link'

function Sidebar({ className }) {

    const menu = [
        { name: "Expense", icon: <CircleDollarSign size={14} />, link: "/expense" },
        { name: "Dashboard", icon: <LayoutDashboard size={14} />, link: "/expense/dashboard" },
        { name: "Analysis", icon: <PackageSearch size={14} />, link: "/expense/analysis" }
    ]

    return (
        <div className={cn('md:w-80', className)}>
            {menu.map((menu, index) =>
                <h3>
                    <Link key={index} href={menu.link} className={cn("text-lg relative flex gap-3 mb-2 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 outline-none transition-colors hover:bg-accent hover:text-accent-foreground",)} >{menu.icon} {menu.name}</Link>
                </h3>
            )}
        </div>
    )
}

export default Sidebar