"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from 'react'

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
        <div className="h-full flex items-center justify-center">
            <div className="w-full px-5 md:px-0 md:w-4/5 lg:w-1/2 h-[500px] shadow-md">
                {session?.user?.name && <Image src={session?.user?.image} width={100} height={100} className="rounded-full cursor-pointer" alt="profile" />}
            </div>
        </div>
    )
}
