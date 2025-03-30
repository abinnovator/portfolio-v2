"use client";
import React from "react";
import { ReactNode } from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
// import path from "path";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
