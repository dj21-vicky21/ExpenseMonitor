"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from 'react'
import UserInput from "../_component/input"
import Select from "../_component/select"

export default function Profile({ params }) {
    const { data, status } = useSession()
    const router = useRouter()
    const [session, setSession] = useState(null)

    useEffect(() => {
        if (data) {
            setSession(data)
            router.push(`./${encodeURIComponent(data.user.name)}`)
        }
    }, [status])

    return (
        <div className="h-full flex items-center justify-center bg-gray-200/90 dark:bg-slate-900">
            <div className="w-full bg-white dark:bg-slate-700/50 p-5 md:p-10 md:w-4/5 lg:w-1/2  shadow-sm rounded-lg">
                {session?.user?.name && <>
                    <div className="flex mb-12">
                        <Image id='photo' src={session?.user?.image} width={75} height={75} className="rounded-full cursor-pointer" alt="profile" />
                        <div className="flex flex-col ml-6 w-full">
                            <p className="text-2xl font-extrabold">Profile</p>
                            <div className="w-full flex items-center justify-between">
                                <p>Personal information and settings.</p>
                                <Button variant='outline'> Update </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-5">
                        <UserInput label="Name" type='text' defaultvalue={session?.user?.name} />
                        <UserInput label="Email" type='email' defaultvalue={session?.user?.email} disabled />
                        <UserInput label="Phone" type='number' />
                        {/* <Select label="Currency sign" type='text' /> */}
                        <Separator />
                        <div id='address' className="grid grid-cols-2 gap-3">
                            <div className="">
                                <Label htmlFor="country" className="w-[85px]">Country</Label>
                                <Input id={"country"} className={"mt-2"} type={"text"} />
                            </div>
                            <div className="">
                                <Label htmlFor="state" className="w-[85px]">State</Label>
                                <Input id={"state"} className={"mt-2"} type={"text"} />
                            </div>
                            <div className="">
                                <Label htmlFor="city" className="w-[85px]">City</Label>
                                <Input id={"city"} className={"mt-2"} type={"text"} />
                            </div>
                            <div className="">
                                <Label htmlFor="zip" className="w-[85px]">ZIP</Label>
                                <Input id={"zip"} className={"mt-2"} type={"text"} />
                            </div>
                        </div>
                    </div>
                </>
                }
            </div>
        </div>
    )
}
