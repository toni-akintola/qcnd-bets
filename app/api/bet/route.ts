import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);

  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    return new NextResponse("Invalid User", { status: 400 });
  }

  const team = await db.team.findFirst({
    where: {
      name: user.teamName,
    },
  });

  if (!team) {
    return new NextResponse("Invalid Team", { status: 400 });
  }

  if (team.bankroll - data.size < 0) {
    return new NextResponse("You don't have enough money!", { status: 400 });
  }

  team.bankroll -= data.size;

  const bet = {
    player: data.original.description,
    over: data.original.name === "Over",
    points: data.original.point,
    odds: data.original.price,
    size: data.size,
    edge: data.predictedEdge,
    teamName: user.teamName,
  };

  const createBet = await db.bet.create({
    data: bet,
  });

  await db.team.update({
    where: {
      name: user.teamName,
    },
    data: {
      bankroll: team.bankroll,
    },
  });

  return NextResponse.json(data);
}
