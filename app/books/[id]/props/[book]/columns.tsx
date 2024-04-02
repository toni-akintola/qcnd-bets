"use client";

import { Outcome } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Outcome>[] = [
  {
    accessorKey: "name",
    header: "Over/Under",
  },
  {
    accessorKey: "description",
    header: "Player Name",
  },
  {
    accessorKey: "price",
    header: "Odds",
  },
  {
    accessorKey: "point",
    header: "Points",
  },
];
