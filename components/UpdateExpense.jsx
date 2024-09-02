"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
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
} from "@/components/ui/dialog"
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import axios from 'axios'
import { addExpenseSchema } from '@/schema/schema'
import { toast } from './ui/use-toast'

function UpdateExpense({ expenseData }) {
    const { UpdateExpenseModalOpen } = useStore()

    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(addExpenseSchema),
        defaultValues: {
            description: expenseData.description,
            amount: expenseData.amount,
            currency: expenseData.currency_sign,
            date: new Date(expenseData.date)
        },
    })

    const updateExpense = async (expenseDetails) => {
        try {
            let config = {
                method: 'PUT',
                url: `${process.env.NEXT_PUBLIC_URL}/api/expense/${expenseData.id}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(expenseDetails),
            };

            const data = await axios(config)
            toast({
                title: "Successfully!",
                description: "Your record successfully stored!",
                variant: "success",
            })
            closeModal()
        } catch (error) {
            console.error(error.response)
            toast({
                title: "Something went wrong!",
                description: "Please try again",
                variant: "destructive"
            })
        }

    }

    function onSubmit(values) {
        console.log(values)
        updateExpense(values)
    }

    // const openmodal = () => {
    //     useStore.setState({ UpdateExpenseModalOpen: !UpdateExpenseModalOpen })
    // }

    const closeModal = () => {
        form.reset()
        useStore.setState({ UpdateExpenseModalOpen: !UpdateExpenseModalOpen })
    }

    return (
        <>
            {/* <Button variant="secondary" className="w-full" onClick={(e) => openmodal()}>Edit</Button> */}
            <Dialog open={UpdateExpenseModalOpen} onOpenChange={closeModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className={'flex gap-3 items-center'}><Image src={'./money.svg'} width={30} height={30} alt="icon" /> Update Expense</DialogTitle>
                        <DialogDescription>
                            <div className='mt-4'>
                                <Form {...form} >
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <FormField
                                            control={form.control}
                                            name="description"
                                            render={({ field }) => (
                                                <FormItem className="text-start">
                                                    <FormLabel>Description</FormLabel>
                                                    <FormControl>
                                                        <Textarea className="resize-none" placeholder="Savings" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className='flex gap-3 flex-col sm:flex-row  '>
                                            <div className='flex flex-col gap-3 mt-[3px] '>
                                                <Label className="text-start">Amount</Label>
                                                <div className='flex'>
                                                    <FormField
                                                        control={form.control}
                                                        name="currency"
                                                        render={({ field }) => (
                                                            <>
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                            <SelectTrigger className="w-[50px] rounded-none rounded-l-md focus:ring-0 focus:ring-offset-0" >
                                                                                <SelectValue placeholder="Currency" {...field} />
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                <SelectItem value={"INR"}>₹</SelectItem>
                                                                                <SelectItem value={"USD"}>$</SelectItem>
                                                                            </SelectContent>
                                                                        </Select>
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            </>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="amount"
                                                        render={({ field }) => (
                                                            <>
                                                                <FormItem className="w-full text-start">
                                                                    <FormControl>
                                                                        <Input {...field} className={'w-full remove-spin-apperance focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none rounded-r-md '} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            </>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                            <FormField
                                                control={form.control}
                                                name="date"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col sm:block items-start w-full sm:w-auto">
                                                        <FormLabel>Date </FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn(
                                                                            "w-full sm:w-[240px] pl-3 text-left font-normal",
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
                                                                        date < new Date("1900-01-01")
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
                                        <div className='flex'>
                                            <Button type="submit">Add</Button>
                                        </div>
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

export default UpdateExpense