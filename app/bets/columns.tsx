"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Game = {
  id: string;
  sport_key: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  price: number;
  time: string;
  bookmakers: any;
};

export const columns: ColumnDef<Game>[] = [
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
