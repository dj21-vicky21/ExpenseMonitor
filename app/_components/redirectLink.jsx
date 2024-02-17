"use client"

import { User } from 'lucide-react'
import useDetails from '@/hooks/useSession'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'


function RedirectLink({ className }) {
    const session = useDetails()
    const router = useRouter()
    const onclick = () => {
        router.push(`/user/${encodeURIComponent(session?.user?.name)}`)
    }

    return (
        <div className={cn('flex gap-1 w-full', className)} onClick={onclick}>
            <User size={14} /> Profile
        </div>
    )
}

export default RedirectLink