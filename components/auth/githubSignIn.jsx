"use client"
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"

export default function GithubSignIn() {
    return (
        <Button onClick={() =>
            signIn("github", {
                callbackUrl: `${window.location.origin}`
            })
        }
            className="mt-4 w-full"
            variant="secondary">
            <FaGithub className="w-4 h-4 mr-4" /> Login Github 
        </Button>
    )
}
