"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  index: number;
}

export function AnimatedCard({ children, index }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}