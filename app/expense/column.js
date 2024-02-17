"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"


export const columns = [
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <Button
                    variant="secondary"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
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
                <Button
                    variant="secondary"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
]