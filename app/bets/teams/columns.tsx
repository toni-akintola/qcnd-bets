"use client";

import { events, Team } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Team>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "bankroll",
    header: "Bankroll",
  },
];
