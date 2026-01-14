import React from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';

export default function Hero() {
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  }

  const blobX = useTransform(mouseX, [-500, 500], [-50, 50]);
  const blobY = useTransform(mouseY, [-500, 500], [-30, 30]);

  return (
    <section 
      onMouseMove={handleMouse}
      className="relative w-full min-h-screen pt-24 pb-12 flex flex-col justify-center items-center overflow-hidden bg-(--bg-color) transition-colors duration-500"
    >
      {/* 1. SECTON BG EFFECT: Adaptive Particle Warp */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(var(--text-color)_1px,transparent_1px)] bg-size-[40px_40px]" />
        
        <motion.div 
          style={{ x: useTransform(mouseX, [-500, 500], [20, -20]), y: useTransform(mouseY, [-500, 500], [20, -20]) }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)]"
        />
      </div>

      {/* 2. Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 mb-8 flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-100/80">
          Fullstack Developer
        </span>
      </motion.div>

      {/* 3. Main Glass Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[94%] md:w-[90%] max-w-6xl min-h-125 md:aspect-21/9 rounded-4xl md:rounded-[4rem] overflow-hidden border border-(--glass-border) shadow-2xl bg-(--glass-bg) backdrop-blur-2xl"
      >
        {/* INTERNAL BG & BLOBS */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-white/40 dark:bg-black/80" />
          <motion.div
            style={{ x: blobX, y: blobY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"
          />
        </div>

        {/* 4. SYNCED MARQUEES WITH ADAPTIVE TEXT */}
        <div className="absolute inset-6 md:inset-10 z-10 pointer-events-none border border-black/5 dark:border-white/5 rounded-3xl md:rounded-[3rem] overflow-hidden">
          
          {/* TOP */}
          <div className="absolute top-0 w-full py-3 opacity-30 font-mono text-[9px] border-b border-black/5 dark:border-white/5">
            <motion.div animate={{ x: [-1000, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex gap-20 whitespace-nowrap text-(--text-color)">
              {[...Array(8)].map((_, i) => (
                <span key={i}>XENON.js // const repo = "fullstack_core"; // mode: "production"</span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="absolute right-0 h-full px-3 opacity-30 font-mono text-[9px] border-l border-black/5 dark:border-white/5 [writing-mode:vertical-rl]">
            <motion.div animate={{ y: [-1000, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex gap-20 whitespace-nowrap text-(--text-color) rotate-180">
              {[...Array(8)].map((_, i) => (
                <span key={i}>XENON.dart // class LiquidUI extends StatelessWidget</span>
              ))}
            </motion.div>
          </div>

          {/* BOTTOM */}
          <div className="absolute bottom-0 w-full py-3 opacity-30 font-mono text-[9px] border-t border-black/5 dark:border-white/5">
            <motion.div animate={{ x: [0, -1000] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex gap-20 whitespace-nowrap text-(--text-color)">
              {[...Array(8)].map((_, i) => (
                <span key={i}>XENON.py // import fastapi, celery // @app.get("/")</span>
              ))}
            </motion.div>
          </div>

          {/* LEFT */}
          <div className="absolute left-0 h-full px-3 opacity-30 font-mono text-[9px] border-r border-black/5 dark:border-white/5 [writing-mode:vertical-rl]">
            <motion.div animate={{ y: [0, -1000] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex gap-20 whitespace-nowrap text-(--text-color)">
              {[...Array(8)].map((_, i) => (
                <span key={i}>XENON.cs // namespace XenonCore {'{'} public async Task Build() {'}'}</span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 5. Center Content */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-10 py-20">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            <span className="text-transparent bg-clip-text bg-shimmer-silver animate-silver-slide">
              XENON
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="mt-8 max-w-xl text-xs md:text-sm text-zinc-600 dark:text-zinc-400 font-medium tracking-[0.2em] uppercase leading-relaxed"
          >
            Developing robust backend architectures <br/> & high-fidelity interactive interfaces.
          </motion.p>
          
          <div className="mt-12 flex flex-col md:flex-row gap-5 items-center">
  {/* Stack Button */}
  <a 
    href="#stack"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="w-full md:w-auto px-12 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl text-center cursor-pointer"
  >
    Stack_
  </a>

  {/* Services Button */}
  <a 
    href="#services"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="w-full md:w-auto px-12 py-4 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 text-black dark:text-white text-[10px] font-black uppercase tracking-widest hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 text-center cursor-pointer"
  >
    Services_
  </a>
</div>
        </div>

        {/* 6. Geometric Accents (Adaptive Borders) */}
        <div className="absolute top-10 left-10 md:top-14 md:left-14 w-3 h-3 border-t-2 border-l-2 border-black/20 dark:border-white/40 z-30" />
        <div className="absolute top-10 right-10 md:top-14 md:right-14 w-3 h-3 border-t-2 border-r-2 border-black/20 dark:border-white/40 z-30" />
        <div className="absolute bottom-10 left-10 md:bottom-14 md:left-14 w-3 h-3 border-b-2 border-l-2 border-black/20 dark:border-white/40 z-30" />
        <div className="absolute bottom-10 right-10 md:bottom-14 md:right-14 w-3 h-3 border-b-2 border-r-2 border-black/20 dark:border-white/40 z-30" />
      </motion.div>

      {/* 7. Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-12 flex flex-col items-center gap-3 opacity-40 dark:opacity-20"
      >
        <div className="w-5 h-8 rounded-full border border-black dark:border-white flex justify-center p-1">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-1 bg-black dark:bg-white rounded-full" />
        </div>
        <span className="text-[7px] font-black uppercase tracking-[0.4em] text-(--text-color)">Scroll to Explore</span>
      </motion.div>

      <style>{`
        .bg-shimmer-silver {
          background-image: linear-gradient(120deg, #52525b 20%, #000000 40%, #000000 60%, #52525b 80%);
          background-size: 200% auto;
        }
        @media (prefers-color-scheme: dark) {
          .bg-shimmer-silver {
            background-image: linear-gradient(120deg, #a1a1aa 20%, #ffffff 40%, #ffffff 60%, #a1a1aa 80%);
          }
        }
        .animate-silver-slide {
          animation: silver-slide 2.5s infinite linear;
        }
        @keyframes silver-slide {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </section>
  );
}