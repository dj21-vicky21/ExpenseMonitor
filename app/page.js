import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/utils/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
      <h1>hello</h1>
    </>
  );
}
