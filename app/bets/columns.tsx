"use client";

import { events } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<events>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "sport_title",
    header: "Sport Title",
  },

  {
    accessorKey: "home_team",
    header: "Home Team",
  },
  {
    accessorKey: "away_team",
    header: "Away Team",
  },
  {
    accessorKey: "commence_time",
    header: "Time",
  },
];
