"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type PageHeaderProps = {
  label: string;
  title: ReactNode;
  subtitle?: string;
};

export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden cinematic-gradient pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold"
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-bebas)] text-5xl leading-[0.95] tracking-wide md:text-7xl lg:text-8xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </div>
  );
}
