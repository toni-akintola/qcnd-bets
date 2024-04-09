import NextAuth from "next-auth/next";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions, User } from "next-auth";
import bcrypt from "bcrypt";
import authOptions from "../options";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
