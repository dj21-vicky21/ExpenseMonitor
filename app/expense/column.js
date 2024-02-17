"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"


export const columns = [
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center select-none cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
            )
        },
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center select-none cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
            )
        },
    },
]