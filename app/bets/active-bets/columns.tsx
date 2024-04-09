"use client";

import { Bet, events, Team } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Bet>[] = [
  {
    accessorKey: "teamName",
    header: "Team",
  },
  {
    accessorKey: "size",
    header: "Bet Size",
  },
  {
    accessorKey: "edge",
    header: "Percieved Edge",
  },
  {
    accessorKey: "odds",
    header: "Odds",
  },
  {
    accessorKey: "points",
    header: "Points",
  },
  {
    accessorKey: "player",
    header: "Player",
  },
  {
    accessorKey: "over",
    header: "Over",
    cell: (info) => <p>{`${info.getValue() ? "Over" : "Under"}`}</p>,
  },
];
