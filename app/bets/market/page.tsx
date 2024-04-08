import { db } from "@/lib/db";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Bets() {
  const data = await db.bet.findMany();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
