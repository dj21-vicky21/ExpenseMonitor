import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";

const UserAvatar = (props) => {

    const { name, image, className } = props

    return (
        <Avatar className={cn("w-8 h-8 border-white cursor-pointer",className)}>
            <AvatarImage src={image} />
            <AvatarFallback>{name[0].toUpperCase() || "CN"}</AvatarFallback>
        </Avatar>
    );
}

export default UserAvatar;


