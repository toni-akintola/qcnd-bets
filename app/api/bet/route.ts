import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Bet } from "@prisma/client";

export async function POST(request: NextRequest) {
  const data = (await request.json()) as Bet;

  const bet = await db.bet.create({
    data: data,
  });

  return NextResponse.json(bet);
}
