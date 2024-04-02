import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Create and save todo on the database
    const events = await db.events.findMany();
    console.log(events);
    return NextResponse.json(events, { status: 200 }); // Respond with the created todo
  } catch (error) {
    console.log("[POST EVENTS]", error);
    return new NextResponse("Internal Server Error", { status: 500 }); // Handle errors
  }
}
