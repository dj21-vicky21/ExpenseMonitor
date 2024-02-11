"use client"

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "../ui/use-toast";

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

    return (<Button disabled={loading} onClick={onclick}>{loading ? "Loading..." : 'Logout'}</Button>);
}

export default LogoutBtn;