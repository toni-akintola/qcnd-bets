import { PlayerProp, columns } from "./columns";
import { DataTable } from "./data-table";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const revalidate = 0; // disable cache

export default async function Props({ params }: { params: { id: string } }) {
  var data = (await redis.lrange("events", 0, -1)) as PlayerProp[];

  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
