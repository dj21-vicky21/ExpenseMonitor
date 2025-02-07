"use client"

import { ArrowUpDown } from "lucide-react"
import { MoreVerticalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { useStore } from "@/store"



const sorting = (column, label) => {
    return (
        <div
            className="flex items-center select-none cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {label}
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
    )
}

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="flex items-center">
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>
        )
    },
    {
        accessorKey: "date",
        header: ({ column }) => sorting(column, "Date")
    },
    {
        accessorKey: "description",
        header: "Description"
    },
    {
        accessorKey: "amount",
        header: ({ column }) => sorting(column, "Amount"),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: row.original.currency_sign,
            }).format(amount)

            return <>{formatted}</>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const expenseData = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={(e) => { useStore.setState({ UpdateExpenseModalOpen: true, expenseData: expenseData }) }}>
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => { useStore.setState({ tableModalOpen: true, expenseData: expenseData }) }} >
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    }
]