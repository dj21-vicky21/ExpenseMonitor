"use client"
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"
import { useEffect, useState } from "react";
import { toast } from "../ui/use-toast";


export default function GithubSignIn() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(loading)
    }, [loading])


    const onClick = async (e) => {
        try {
            setLoading(true)
            await signIn("github", {
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
        <Button onMouseUp={onClick} disabled={loading} className="mt-4 w-full" variant="secondary">
            <FaGithub className="w-4 h-4 mr-4" /> {loading ? "Loading..." : "Login Github"}
        </Button>
    )
}
