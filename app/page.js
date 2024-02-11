import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/utils/authOptions";
import LogoutBtn from "@/components/auth/logOutBtn";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
      {session ? <div>
        <h1>Logged in</h1>
        <LogoutBtn />
      </div> : "login please"}
    </>
  );
}
