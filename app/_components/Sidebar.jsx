import React from 'react'
import { cn } from '@/lib/utils'

function Sidebar() {
    const menu = [
        { name: "Dashboard" },
        { name: "Expense" },
        { name: "Report" },
    ]

    return (
        <div className='w-64 border-r border-r-gray p-3'>
            <ul>
                {menu.map((menu, index) =>
                    <li key={index} className={cn("relative mb-2 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground", )} >{menu.name}</li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar