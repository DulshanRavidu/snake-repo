"use client";

import PlayerCard from "@/components/playerCard";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import React from "react";

export default function AuroraBackgroundDemo() {
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Welcome to GoGo Snake.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Welcome to the exciting game.
          </div>
        </motion.div>
      </AuroraBackground>
      <div className="flex flex-row w-full items-center justify-around h-svh">
        <PlayerCard score={105} player={1} />
        <PlayerCard score={10} player={2} />
      </div>
    </>
  );
}
