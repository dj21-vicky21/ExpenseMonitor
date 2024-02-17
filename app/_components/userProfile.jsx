import LogoutBtn from "@/components/auth/logOutBtn";
import UserAvatar from "@/components/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import RedirectLink from "./redirectLink";

const UserProfile = ({ user }) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <UserAvatar name={user?.name} image={user.image} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <div className="px-4 py-5 border-b mb-1">
                    <div className="flex gap-3 ">
                        <UserAvatar name={user?.name} image={user.image} className={'w-10 h-10 shadow'} />
                        <div className="flex flex-col ">
                            <p className="font-semibold">{user?.name}</p>
                            <p className="text-xs mt-1">{user?.email}</p>
                        </div>
                    </div>
                </div>
                <DropdownMenuItem>
                    <RedirectLink />
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <LogoutBtn />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserProfile;