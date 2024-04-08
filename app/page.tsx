import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Home from "../src/components/Home";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log(JSON.stringify(session));
  return <Home email={session?.user.email} team={session?.user.team} />;
}
