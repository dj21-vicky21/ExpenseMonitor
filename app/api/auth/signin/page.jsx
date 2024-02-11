import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { authOptions } from "../utils/authOptions";
import GithubSignIn from "@/components/auth/githubSignIn";
import EmailSignIn from "@/components/auth/emailSignIn";
import GoogleSignIn from "@/components/auth/googleSignIn";

export default async function LoginPage() {

    const session = await getServerSession(authOptions)

    if (session) {
        redirect('/')
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Hi!</CardTitle>
                    <CardDescription>
                        To view the private page, authentication is required.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <EmailSignIn />
                        <div className="w-full grid place-items-center mt-4 bg-gray-500/25 h-0.5"><span className="-mt-2.5 bg-white px-2">or</span></div>
                        <GithubSignIn />
                        <GoogleSignIn />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}