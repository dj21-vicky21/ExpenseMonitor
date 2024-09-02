import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import GithubSignIn from "@/components/auth/githubSignIn";
import EmailSignIn from "@/components/auth/emailSignIn";
import GoogleSignIn from "@/components/auth/googleSignIn";

export default function LoginPage() {

    return (
        <div className="w-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Hello!</CardTitle>
                    <CardDescription>
                        To view this page, authentication is required.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        {/* <EmailSignIn /> */}
                        {/* <div className="w-full grid place-items-center mt-4 bg-gray-500/25 h-0.5"><span className="-mt-2.5 bg-white dark:bg-[hsl(var(--card))] px-2">or</span></div> */}
                        <GithubSignIn />
                        <GoogleSignIn />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}