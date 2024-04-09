"use client";

import { Market, Outcome } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Market>[] = [
  {
    accessorKey: "key",
    header: "Market Type",
    cell: (info) => (
      <p>{`${String(info.getValue())
        .split("_")
        .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(" ")}`}</p>
    ),
  },
];
