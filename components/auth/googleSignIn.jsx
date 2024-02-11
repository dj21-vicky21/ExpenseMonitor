"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "../ui/use-toast";

export default function GoogleSignIn() {

    const [loading, setLoading] = useState(false)

    const onClick = async () => {
        try {
            setLoading(true)
            const access = await signIn("google", {
                callbackUrl: `${window.location.origin}`
            })
        } catch (error) {
            return toast({
                title: "well this did not work...",
                description: "something went wrong,please try again",
                variant: "destructive"
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <Button disabled={loading} onClick={onClick}
            className="mt-4 w-full"
            variant="secondary">
            <FaGoogle className="w-4 h-4 mr-4" /> {loading ? "Loading..." : "Login Google"}
        </Button>
    )
}