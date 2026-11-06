"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = false }: CardProps) {
  // Extract the shared classes to keep the code clean
  const baseClasses = cn(
    "bg-[var(--surface)] p-8 md:p-10 rounded-[var(--radius-lg)]",
    "border border-[var(--border)] shadow-sm",
    "transition-colors duration-500",
    hoverable && "hover:border-[var(--accent)] hover:shadow-xl",
    className
  );

  // Return the Framer Motion version if hoverable is true
  if (hoverable) {
    return (
      <motion.div
        whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
        className={baseClasses}
      >
        {children}
      </motion.div>
    );
  }

  // Return a standard div if hoverable is false
  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
}