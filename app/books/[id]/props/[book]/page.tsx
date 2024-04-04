import { db } from "@/lib/db";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Props({
  params,
}: {
  params: { id: string; book: string };
}) {
  const event = await db.events.findFirst({
    where: {
      id: params.id,
    },
  });
  console.log(params);
  const outcomes = event?.bookmakers
    .filter((bookmaker) => bookmaker.title == params.book)
    .map((bookmaker) => bookmaker.markets[0].outcomes);
  console.log(outcomes![0]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={outcomes![0]} />
    </div>
  );
}
