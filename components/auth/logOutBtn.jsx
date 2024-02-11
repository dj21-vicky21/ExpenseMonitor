"use client"

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

const LogoutBtn = () => {
    return (<Button onClick={(e) => signOut({ callbackUrl: `${window.location.origin}/auth` })}>Logout</Button>);
}

export default LogoutBtn;