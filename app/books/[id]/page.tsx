import { db } from "@/lib/db";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Props({ params }: { params: { id: string } }) {
  const event = await db.events.findFirst({
    where: {
      id: params.id,
    },
    select: {
      bookmakers: true,
    },
  });

  const data = event!.bookmakers;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
