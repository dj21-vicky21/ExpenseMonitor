"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Image from 'next/image'
import { useStore } from '@/store'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function AddExpense() {

    const { AddExpenseModalOpen } = useStore()

    const formSchema = z.object({
        description: z.string()
            .min(2, { message: "Description must be at least 2 characters long." })
            .max(50, { message: "Description must not exceed 50 characters." }),
        amount: z.number()
            .positive({ message: "Amount must be greater than 0." }) // Ensures amount is a positive number, implicitly greater than 0
            .gt(0, { message: "Amount must be greater than 0." }), // Explicitly ensures amount is greater than 0
        date: z.date({
            required_error: "A date is required.",
        }),
    });

    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: "",
            amount: Number(""),
            date: new Date()
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const openmodal = () => {
        useStore.setState({ AddExpenseModalOpen: !AddExpenseModalOpen })
    }

    return (
        <>
            <Button variant="secondary" onClick={(e) => openmodal()}>Add</Button>
            <Dialog open={AddExpenseModalOpen} onOpenChange={() => useStore.setState({ AddExpenseModalOpen: !AddExpenseModalOpen })}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className={'flex gap-3 items-center'}><Image src={'./money.svg'} width={30} height={30} alt="icon" /> New Expense</DialogTitle>
                        <DialogDescription>
                            <div className='mt-4'>
                                <Form {...form} >
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <FormField
                                            control={form.control}
                                            name="description"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Description</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="Savings" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className='flex gap-3'>
                                            <FormField
                                                control={form.control}
                                                name="amount"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Amount</FormLabel>
                                                        <FormControl>
                                                            <Input className={'remove-spin-apperance'} placeholder="00.00" type="number" {...field} onChange={event => field.onChange(+event.target.value)} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="date"
                                                render={({ field }) => (
                                                    <FormItem >
                                                        <FormLabel>Date </FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn(
                                                                            "w-[240px] pl-3 text-left font-normal",
                                                                            !field.value && "text-muted-foreground"
                                                                        )}
                                                                    >
                                                                        {field.value ? (
                                                                            format(field.value, "PPP")
                                                                        ) : (
                                                                            <span>Pick a date</span>
                                                                        )}
                                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    disabled={(date) =>
                                                                        date > new Date() || date < new Date("1900-01-01")
                                                                    }
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Button type="submit">Add</Button>
                                    </form>
                                </Form>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default AddExpense