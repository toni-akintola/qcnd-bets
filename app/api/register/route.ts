import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, teamName, password } = body;

  if (!teamName || !email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const exist = await db.user.findUnique({
    where: {
      teamName,
    },
  });

  if (exist) {
    throw new Error("Team already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const team = await db.team.create({
    data: {
      name: teamName,
      bankroll: 1000,
    },
  });

  const user = await db.user.create({
    data: {
      teamName,
      email,
      password,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
