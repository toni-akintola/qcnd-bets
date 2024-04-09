import { db } from "@/lib/db";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { events, Market } from "@prisma/client";

export default async function Books({
  params,
}: {
  params: { id: string; book: string };
}) {
  const event = (await db.events.findFirst({
    where: {
      id: params.id,
    },
  })) as events;
  const markets = event.bookmakers
    .filter((bookmaker) => bookmaker.title == params.book)
    .map((bookmaker) => bookmaker.markets);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={markets[0]} />
    </div>
  );
}
