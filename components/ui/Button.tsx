"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  
  const baseStyles =
    "inline-flex items-center justify-center " +
    "px-7 py-3.5 " + // slightly more generous, luxury padding
    "text-sm font-medium tracking-wide " + // slight letter tracking for a high-end editorial feel
    "transition-all duration-300 ease-out " +
    "rounded-[var(--radius-sm)] " + // cohesive luxury border radius
    "focus-visible:outline-none " +
    "focus-visible:ring-2 " +
    "focus-visible:ring-[var(--accent)] " +
    "focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:cursor-not-allowed " +
    "active:scale-[0.98]"; // subtle premium press feedback

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover,var(--accent))] text-white " +
      "shadow-lg shadow-[var(--accent)]/25 hover:shadow-xl hover:shadow-[var(--accent)]/40 " +
      "hover:brightness-105 border border-white/10",
    secondary:
      "border border-[var(--border-dark)] text-[var(--foreground)] bg-[var(--surface)] " +
      "shadow-sm hover:border-[var(--accent)] hover:bg-[var(--surface-soft)] hover:text-[var(--primary)]",
    ghost:
      "text-[var(--foreground)] hover:text-[var(--accent)] hover:bg-[var(--surface-soft)]/50",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}