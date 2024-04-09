import { getServerSession } from "next-auth/next";
import authOptions from "./api/auth/options";
import Home from "../src/components/Home";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return <Home email={session?.user.email} team={session?.user.team} />;
}
