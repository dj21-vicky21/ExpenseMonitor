"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";
import { Loader2Icon, LoaderIcon } from "lucide-react";

const EmailSignIn = () => {
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const signInEmail = async () => {
        try {
            if (email === null || email === undefined || email === "") {
                setError(true)
                return false
            }
            setLoading(true)
            const signInResult = await signIn("email", {
                email,
                callbackUrl: `${window.location.origin}/home`,
                redirect: false
            })
            setEmail("")
            if (signInResult.error !== null) {
                return toast({
                    title: "well this did not work...",
                    description: "something went wrong,please try again",
                    variant: "destructive"
                })
            }
            return toast({
                title: "check your email",
                description: "A magic link has been sent to email"
            })
        } catch (error) {
            return toast({
                title: "check your email",
                description: "A magic link has been sent to email"
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form>
            <div className="flex flex-col gap-y-2">
                <Label>Email {error && <span className="text-red-500 ml-1">*</span>}</Label>
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    value={email || ""}
                    placeholder="john@example.com"
                />
                {error && <span className="text-red-500 text-xs">Required</span>}
            </div>

            <Button type="button" disabled={loading} className="mt-4 w-full" onClick={signInEmail}>
                {loading ? <LoaderIcon /> : 'Login with Email'}
            </Button>
        </form>
    );
}

export default EmailSignIn;