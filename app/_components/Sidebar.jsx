"use client"
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { CircleDollarSign, LayoutDashboard, PackageSearch } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'

function Sidebar({ className }) {
    const pathname = usePathname()
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(pathname)

    const menu = [
        { name: "Expense", icon: <CircleDollarSign size={14} />, link: "/expense" },
        { name: "Dashboard", icon: <LayoutDashboard size={14} />, link: "/expense/dashboard" },
        { name: "Analysis", icon: <PackageSearch size={14} />, link: "/expense/analysis" }
    ]

    const handlerChangePage = (pagePath) => {
        setCurrentPage(pagePath)
        router.push(pagePath)
    }

    return (
        <div className={cn('md:w-80', className)}>
            <div>
                {menu.map((menu, index) =>
                    <Button key={index} variant="secondary" onClick={(e) => handlerChangePage(menu.link)} className={cn("gap-3 w-full justify-start mb-1 text-[hsl(var(--muted-foreground))] ", currentPage === menu.link && "bg-secondary/80 text-[hsl(var(--accent-foreground))]")}>
                        {menu.icon} {menu.name}
                    </Button>
                )}
            </div>
        </div>
    )
}

export default Sidebar