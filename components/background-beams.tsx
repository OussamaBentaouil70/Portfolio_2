"use client";

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function BackgroundBeams() {
  const [mounted, setMounted] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 0.2 }
            : {
                scale: [1, 1.08, 1],
                opacity: [0.22, 0.34, 0.22],
              }
        }
        transition={{
          duration: 16,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: 'linear',
        }}
        className="absolute -top-[8%] -left-[8%] h-[34%] w-[34%] rounded-full bg-primary/18 blur-[84px] will-change-transform"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 0.16 }
            : {
                scale: [1, 1.12, 1],
                opacity: [0.14, 0.26, 0.14],
              }
        }
        transition={{
          duration: 20,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: 'linear',
        }}
        className="absolute top-[18%] -right-[6%] h-[42%] w-[42%] rounded-full bg-blue-500/10 blur-[100px] will-change-transform"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 0.1 }
            : {
                scale: [1, 1.1, 1],
                opacity: [0.08, 0.16, 0.08],
              }
        }
        transition={{
          duration: 18,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-[8%] left-[16%] hidden h-[48%] w-[48%] rounded-full bg-indigo-500/10 blur-[110px] will-change-transform md:block"
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
