"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"
import { FaGoogle } from "react-icons/fa";

export default function GoogleSignIn() {
    return (
        <Button onClick={() =>
            signIn("google", {
                callbackUrl: `${window.location.origin}`
            })
        }
            className="mt-4 w-full"
            variant="secondary">
           <FaGoogle className="w-4 h-4 mr-4"/> Login Google 
        </Button>
    )
}