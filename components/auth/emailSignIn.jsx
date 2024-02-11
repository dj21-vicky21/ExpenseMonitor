"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";

const EmailSignIn = () => {
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(false);

    const signInEmail = async () => {
        try {
            if (!email) {
                return
            }
            setLoading(true)
            const signInResult = await signIn("email", {
                email,
                callbackUrl: `${window.location.origin}`,
                redirect: false
            })

            console.log("signInResult", signInResult);

            setEmail(" ")
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
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <form>
            <div className="flex flex-col gap-y-2">
                <Label>Email</Label>
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    value={email || ""}
                    placeholder="name@example.com"
                />
            </div>

            <Button type="submit" disabled={loading} className="mt-4 w-full" onClick={(e) => signInEmail()}>
                {!loading ? "Login with Email" : "Loading..."}
            </Button>
        </form>
    );
}

export default EmailSignIn;