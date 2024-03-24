"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Game = {
  name: string
  price: number
}

export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: "name",
    header: "Team",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
]
