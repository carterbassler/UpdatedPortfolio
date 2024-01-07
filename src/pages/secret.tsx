import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import React from "react";
import "tailwindcss/tailwind.css";

type Props = {};

function secret({}: Props) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-main">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          You've found my <br /> Secret Page
        </motion.h1>
      </LampContainer>
    </div>
  );
}

export default secret;
