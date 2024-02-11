import { ModeToggle } from "@/components/DarkModdleToggle";

const NavbarLogin = () => {
    return (<nav>
        <div className="w-full absolute dark:bg-secondary/80 h-16 shadow-md dark:shadow-none  px-4 md:px-12">
            <div className="flex items-center justify-between max-w-7xl mx-auto h-full">
                <p>Logo</p>
                <ModeToggle />
            </div>
        </div>
    </nav>);
}


export default NavbarLogin;