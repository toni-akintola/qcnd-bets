"use client";

import { Market, Bookmaker } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Bookmaker>[] = [
  {
    accessorKey: "title",
    header: "Book",
    footer: (props) => props.column.id,
  },
];
