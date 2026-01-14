import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExit(true), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const text = "IAMXENON404";

  return (
    <AnimatePresence>
      {!isExit && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(40px)", scale: 1.05 }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
        >
          {/* GIANT GHOST BACKDROP */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <h1 
                className="text-[25vw] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-shimmer-silver animate-silver-slide whitespace-nowrap opacity-[0.07] blur-[8px]"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
              >
                {text}
              </h1>
            </motion.div>
          </div>

          {/* MAIN FRONT CONTENT */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex overflow-hidden py-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {text.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* PROGRESS SECTION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col items-center gap-4 w-72"
            >
              <div className="flex justify-between w-full px-1">
                <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-bold">
                  Loading Core
                </span>
                <span className="text-[10px] tabular-nums text-white/50 font-mono">
                  {progress}%
                </span>
              </div>
              
              <div className="w-full h-[2px] bg-white/5 relative rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="absolute inset-y-0 left-0 bg-white shadow-[0_0_20px_#fff] transition-all duration-300 ease-out"
                />
              </div>
            </motion.div>
          </div>

          {/* MINIMALIST FRAME */}
          <div className="absolute inset-8 pointer-events-none opacity-10">
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white" />
          </div>

          <style>{`
            .bg-shimmer-silver {
              background-image: linear-gradient(
                120deg, 
                rgba(255,255,255,0.05) 20%, 
                rgba(255,255,255,0.6) 45%, 
                rgba(255,255,255,0.6) 55%, 
                rgba(255,255,255,0.05) 80%
              );
              background-size: 200% auto;
            }
            @keyframes silver-slide {
              0% { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
            .animate-silver-slide {
              animation: silver-slide 6s infinite linear;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}