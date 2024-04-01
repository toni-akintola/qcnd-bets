import { Game, columns } from "./columns"
import { DataTable } from "./data-table"
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const revalidate = 0; // disable cache

export default async function DemoPage() {
    const data = await redis.lrange("events", 0, -1) as Game[]
    console.log(data)

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
