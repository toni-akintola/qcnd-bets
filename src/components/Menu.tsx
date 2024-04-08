"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export type TeamProps = {
  name: string | undefined;
  bankroll: bigint | undefined;
};

export const Menu = (props: TeamProps) => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 items-center">
      <Link href="/">
        <Image
          src="/QCND.svg"
          alt="QCND Logo"
          className="dark:invert"
          width={40}
          height={20}
          priority
        />
      </Link>
      <div className="max-w-6xl flex grow justify-end items-center text-sm text-foreground">
        <div className="flex flex-row grow">
          <>
            <Link
              href="/files"
              className="py-4 px-6 cursor-pointer hover:bg-slate-100 font-bold"
            >
              Files
            </Link>
            <Link
              href="/chat"
              className="py-4 px-6 cursor-pointer hover:bg-slate-100 font-bold"
            >
              Chat
            </Link>
          </>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center gap-4">
            <p>{props.name}</p>
            <p>{Number(props.bankroll)}</p>
            <div className="hidden sm:block">Welcome back!</div>
            <Button
              variant="outline"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
