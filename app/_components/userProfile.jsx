// "use client"

import LogoutBtn from "@/components/auth/logOutBtn";
import UserAvatar from "@/components/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const UserProfile = ({ user }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <UserAvatar name={user?.name} image={user.image} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <LogoutBtn />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserProfile;