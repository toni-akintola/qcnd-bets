import Menu from "@/components/Menu";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/options";
import { db } from "@/lib/db";

export default async function BetsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  const team = await db.team.findFirst({
    where: {
      name: session?.user.team,
    },
  });
  return (
    <div className="flex flex-col items-center h-full">
      <Menu name={team?.name} bankroll={team?.bankroll} />
      <main className="w-full grow bg-background flex flex-col items-center h-[calc(100%-5rem)]">
        {children}
      </main>
    </div>
  );
}
