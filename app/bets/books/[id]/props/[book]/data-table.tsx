"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { getSession } from "next-auth/react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [betSize, setBetSize] = useState<number>(0);
  const [edge, setEdge] = useState<string>("0");
  const [openDialog, setOpenDialog] = useState(false);

  const submitBet = async (original: TData) => {
    const size = betSize;
    const predictedEdge = edge;
    const session = await getSession();
    const email = session?.user.email as string;
    const response = await fetch(
      `${process.env.NODE_ENV === "development" ? "http://localhost:3000/api/bet" : "https://qcnd-bets.vercel.app/api/bet"}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ original, size, predictedEdge, email }),
      },
    );

    if (response.ok) {
      alert("Successfully submitted bet!");
      setOpenDialog(false);
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                  <DialogTrigger asChild>
                    <Button className="bg-qcnd mt-2">Bet</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Place a Bet</DialogTitle>
                      <DialogDescription>
                        Enter your bet and expected edge.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="bet" className="text-right">
                          Bet Size
                        </Label>
                        <Input
                          id="bet"
                          defaultValue={0}
                          type="number"
                          onChange={(e) =>
                            setBetSize(Number(e.currentTarget.value))
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edge" className="text-right">
                          Edge
                        </Label>
                        <Input
                          id="edge"
                          defaultValue="0"
                          className="col-span-3"
                          onChange={(e) => setEdge(e.currentTarget.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        className="bg-qcnd"
                        onClick={() => submitBet(row.original)}
                        type="submit"
                      >
                        Submit Bet
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
