"use client";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";
import Stairs from "./Stairs";
import { motion } from "motion/react";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex ">
            <Stairs />
          </div>
          <motion.div
            className="w-screen h-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
