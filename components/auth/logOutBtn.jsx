"use client"

import { signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { LogOut } from "lucide-react";

const LogoutBtn = () => {
    const [loading, setLoading] = useState(false)

    const onclick = async () => {
        try {
            setLoading(true)
            const access = await signOut({ callbackUrl: `${window.location.origin}/auth` })
        } catch (error) {
            toast({
                title: "well this did not work...",
                description: "something went wrong,please try again",
                variant: "destructive"
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div disabled={loading} onClick={onclick} className={'flex items-center gap-1'} >
            <LogOut size={14} /> {loading ? "Loading..." : 'Logout'}
        </div>);
}

export default LogoutBtn;