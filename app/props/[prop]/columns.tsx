"use client";

import { Bookmaker } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PlayerProp = {
  away_team: string;
  bookmakers: Bookmaker[];
  commence_time: Date;
  home_team: string;
};

export const columns: ColumnDef<PlayerProp>[] = [
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
