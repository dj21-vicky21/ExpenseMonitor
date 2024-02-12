import { ModeToggle } from "@/components/DarkModdleToggle";
import UserProfile from "./userProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/utils/authOptions";

const Navbar = async () => {

    const session = await getServerSession(authOptions)

    return <>
        <nav>
            <div className="w-full dark:bg-secondary h-14 shadow-md dark:shadow-none  px-4 md:px-12">
                <div className="flex items-center justify-between max-w-7xl mx-auto h-full">
                    <p>Logo</p>
                    <div className="flex items-center gap-5">
                        <ModeToggle />
                        {session && <UserProfile user={session.user} />}
                    </div>
                </div>
            </div>
        </nav>
    </>;
}

export default Navbar;