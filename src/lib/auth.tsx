"use client";

import { SessionProvider } from "next-auth/react";

export default function Provider(children: React.ReactNode) {
  return <SessionProvider>{children}</SessionProvider>;
}
