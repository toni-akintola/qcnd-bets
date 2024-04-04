import { Game, columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Bets() {
  const response = await fetch("http://localhost:3000/api/events/");
  const data = await response.json();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
