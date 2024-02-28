"use client"
import * as React from "react"
import { ChevronLeft, ChevronRight, SearchIcon } from "lucide-react"
import Image from "next/image"
import { rankItem } from "@tanstack/match-sorter-utils"
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel, getFilteredRowModel, getPaginationRowModel } from "@tanstack/react-table"

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useStore } from "@/store"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from "@/components/ui/alert-dialog"
import AddExpense from "@/components/addExpense"

export function DataTable({ columns, data }) {
    const { tableModalOpen } = useStore()
    const [sorting, setSorting] = React.useState([])
    const [globalFilter, setGlobalFilter] = React.useState([])
    const [columnVisibility, setColumnVisibility] = React.useState({})

    const fuzzyFilter = (row, columnId, value, addMeta) => {
        // Rank the item
        const itemRank = rankItem(row.getValue(columnId), value)
        // Store the itemRank info
        addMeta({
            itemRank,
        })
        // Return if the item should be filtered in/out
        return itemRank.passed
    }

    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            globalFilter,
            columnVisibility
        },
    })

    React.useEffect(() => {
        table.setPageSize(15);
    }, [])

    return (
        <div>
            <div className="flex items-center justify-between gap-5 py-4">
                <div className="flex items-center relative">
                    <SearchIcon className="absolute left-2.5" size={16} color="gray" />
                    <Input
                        placeholder="Search"
                        value={globalFilter}
                        onChange={(event) =>
                            setGlobalFilter(event.target.value)
                        }
                        className="pl-8 max-w-sm"
                    />
                </div>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        disabled={column.id === "description" || column.id === "amount"}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="rounded-md border min-h-[585px]">
                <Table className={!table.getRowModel().rows?.length && 'h-[585px]'}>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            !data.length ?
                                <TableRow className="hover:bg-transparent">
                                    <TableCell colSpan={columns.length} className="text-center " >
                                        <div className="flex flex-col items-center justify-center w-full">
                                            <Image
                                                src={'/noResult.png'}
                                                alt="My SVG"
                                                width={200}
                                                height={200}
                                            />
                                            <p className="text-lg font-extrabold mb-3">
                                                <Button variant="secondary" onClick={() => useStore.setState({ AddExpenseModalOpen: true })}>Add</Button>
                                            </p>
                                        </div>
                                    </TableCell>
                                </TableRow> :
                                <TableRow className="hover:bg-transparent">
                                    <TableCell colSpan={columns.length} className="text-center " >
                                        <div className="flex flex-col items-center justify-center w-full">
                                            <Image
                                                src={'/noResult.png'}
                                                alt="My SVG"
                                                width={200}
                                                height={200}
                                            />
                                            <p className="text-lg font-extrabold mb-3"> No results found </p>

                                            It seems we can’t find any results based on your search.
                                        </div>
                                    </TableCell>
                                </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* <Button onClick={()=>table.setPageIndex(1)}>Prev</Button> */}
            <div className="flex items-center justify-center gap-5 mt-10">
                {table.getPageCount() > 1 &&
                    <>
                        <Button variant={'outline'} disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}><ChevronLeft /></Button>
                        <Button variant={'outline'} disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}><ChevronRight /></Button>
                    </>}
            </div>

            <AlertDialog open={tableModalOpen} onOpenChange={(e) => { useStore.setState({ tableModalOpen: false }) }}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
