"use client";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type HomeProps = {
  email: string | undefined;
  team: string | undefined;
};
const Home = (props: HomeProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 md:py-12">
      <motion.div
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="z-10 max-w-5xl w-full items-center px-4 py-2 lg:mt-0 sm:mt-10 font-mono text-sm flex border-gray-200 rounded-full bg-gray-100 justify-between"
      >
        <motion.a
          href="\"
          className="-m-1.5 p-1.5 flex-row items-center flex space-x-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="/QCND.svg"
            alt="QCND Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          <h2 className="text-2xl font-extrabold text-qcnd">QCND Bets</h2>
        </motion.a>
        {props.email && <motion.p>{props.email}</motion.p>}
        {props.team && <motion.p>{props.team}</motion.p>}
        {props.email ? (
          <motion.a
            href="/bets"
            className="group flex-row flex space-x-3 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-qcnd hover:bg-green-400">
              <h2 className={`text-2xl font-semibold`}>Home</h2>
              <ArrowRight className="h-8 w-8" />
            </Button>
          </motion.a>
        ) : (
          <motion.a
            href="/login"
            className="group flex-row flex space-x-3 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-qcnd hover:bg-green-400">
              <h2 className={`text-2xl font-semibold`}>Login</h2>
              <ArrowRight className="h-8 w-8" />
            </Button>
          </motion.a>
        )}
      </motion.div>
      <motion.div
        className="flex flex-col gap-y-6 w-full items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2 className="text-2xl font-extrabold">Rules</h2>
        <ol className="text-bold space-y-2 list-decimal">
          <li>One betting account per team.</li>
          <li>Let us know about any bugs or errors with the system.</li>
          <li>Be patient with us and with the software.</li>
          <li>Have fun!</li>
        </ol>
      </motion.div>

      <motion.div
        className="relative border-t justify-between place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group col-span-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              How to{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn more about how to use our betting interface.
            </p>
          </Link>

          <Link
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent col-span-2 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn more about Python and building sports betting models.
            </p>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Home;
