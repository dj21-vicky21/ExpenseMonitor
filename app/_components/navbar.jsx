import { ModeToggle } from "@/components/DarkModdleToggle";
import UserProfile from "./userProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/utils/authOptions";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import LogoutBtn from '@/components/auth/logOutBtn'
import RedirectLink from '../_components/redirectLink'
import Sidebar from "./Sidebar";
import { MenuIcon } from "lucide-react";

const Navbar = async () => {

    const session = await getServerSession(authOptions)

    return <>
        <nav>
            <div className="w-full dark:bg-secondary h-14 shadow-md dark:shadow-none  px-4 md:px-12">
                <div className="flex items-center justify-between mx-auto h-full">
                    <Link href={'/home'}>Logo</Link>
                    {/* mobile side bar  */}
                    <div className='block md:hidden'>
                        <Sheet>
                            <SheetTrigger><MenuIcon /></SheetTrigger>
                            <SheetContent className="w-[250px]" side={"left"}>
                                <SheetHeader>
                                    <SheetTitle className="text-start">Expense Tracking</SheetTitle>
                                    <SheetDescription>
                                        <div className='h-full flex gap-y-3 flex-col justify-between'>
                                            <Sidebar />
                                            <div className='flex flex-col gap-1 border-t pt-5'>
                                                <RedirectLink className={'relative flex mb-2 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground'} />
                                                <LogoutBtn className={'relative flex mb-2 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground'} />
                                            </div>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="hidden md:flex items-center gap-5">
                        <ModeToggle />
                        {session && <UserProfile user={session.user} />}
                    </div>
                </div>
            </div>
        </nav>
    </>;
}

export default Navbar;