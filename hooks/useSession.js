import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

export default function useDetails() {
    const { data, status } = useSession()
    const [session, setSession] = useState(null)

    useEffect(() => {
        if (data) {
            setSession(data)
        }
    }, [status])

    return session
}