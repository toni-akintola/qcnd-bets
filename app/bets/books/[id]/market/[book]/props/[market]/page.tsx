import { db } from "@/lib/db";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { events, Market } from "@prisma/client";

export default async function Books({
  params,
}: {
  params: { id: string; book: string; market: string };
}) {
  const event = (await db.events.findFirst({
    where: {
      id: params.id,
    },
  })) as events;

  const markets = event?.bookmakers
    .filter((bookmaker) => bookmaker.title == params.book)
    .map((bookmaker) => bookmaker.markets);

  const filteredMarkets = markets[0];

  const market = filteredMarkets.filter(
    (market) => market.key === params.market,
  );

  const outcomes = market[0].outcomes;
  console.log(outcomes);
  // const outcomes = event?.bookmakers
  //   .filter((bookmaker) => bookmaker.title == params.book)
  //   .map((bookmaker) => bookmaker.markets.outcomes);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={outcomes} />
    </div>
  );
}
