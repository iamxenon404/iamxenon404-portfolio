import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutSystem() {
  const [isOpen, setIsOpen] = useState(false);
  const [uptime, setUptime] = useState("00:00:00");

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const diff = Date.now() - start;
      const h = Math.floor(diff / 3600000).toString().padStart(2, '0');
      const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
      const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
      setUptime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-32 px-6 md:px-20 bg-(--bg-color) overflow-hidden border-t border-zinc-500/10" id='about'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Identity & Status */}
        <div className="space-y-8 lg:sticky lg:top-32">
          <div className="space-y-4">
            <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase font-black">
              Kernel_Identity
            </h2>
            <div className="relative inline-block">
              <h3 className="text-black dark:text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none relative z-10">
                Full-Stack <br /> Architect.
              </h3>
              {/* Glitch Effect Overlay */}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
                className="absolute top-0 left-0 text-red-500/30 text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none translate-x-1"
              >
                Full-Stack <br /> Architect.
              </motion.span>
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] border border-(--glass-border) bg-(--glass-bg) space-y-6 relative overflow-hidden">
             {/* Background ERR_404 Glitch Text */}
             <div className="absolute top-2 right-4 font-mono text-[40px] font-black text-black dark:text-white opacity-[0.03] select-none pointer-events-none italic">
               ERR_404_NOT_FOUND
             </div>

            <div className="flex items-center justify-between border-b border-zinc-500/10 pb-4">
              <span className="text-zinc-500 font-mono text-[10px] uppercase">Session_Uptime</span>
              <span className="text-black dark:text-white font-mono text-xs font-bold tracking-widest">{uptime}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-zinc-500 font-mono text-[8px] uppercase">Core_Logic</p>
                <p className="text-blue-500 font-mono text-[10px] animate-pulse">RUNNING_STABLE</p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-zinc-500 font-mono text-[8px] uppercase">Data_Stream</p>
                <p className="text-black dark:text-white font-mono text-[10px]">ENCRYPTED_AES</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Narrative & Scanning Write-up */}
        <div className="space-y-12 relative">
          {/* Scanning Blue Line Effect */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -left-4 w-0.5 h-20 bg-linear-to-b from-transparent via-blue-500 to-transparent z-0 opacity-50 hidden md:block"
          />

          <div className="relative group space-y-12">
            <div className="space-y-2">
              <span className="text-blue-500 font-mono text-xs font-black tracking-widest uppercase opacity-40">Section_01</span>
              <p className="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium lowercase italic">
                <span className="text-black dark:text-white not-italic font-black uppercase">I don't just write code;</span> i engineer digital ecosystems that balance performance with human-centered design.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-blue-500 font-mono text-xs font-black tracking-widest uppercase opacity-40">Section_02</span>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
                Based in the intersection of Design and Development, I specialize in bridging the gap between high-fidelity prototypes and production-ready systems.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-blue-500 font-mono text-xs font-black tracking-widest uppercase opacity-40">Section_03</span>
              <div className="relative">
                <p className="text-black dark:text-white text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight italic">
                  I build with <span className="text-blue-500">creativity</span> that is <span className="line-through decoration-red-500/50">out of this world.</span>
                </p>
                <span className="block mt-2 font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em]">
                  {'>'} CRITICAL_ERROR: REALITY_OVERRIDE_ACTIVE
                </span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-4 group mt-10"
          >
            <div className="w-14 h-14 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
              <span className="text-xl">⊕</span>
            </div>
            <span className="text-black dark:text-white font-black uppercase tracking-[0.2em] text-[10px] border-b border-transparent group-hover:border-blue-500 transition-all">
              Initialize_Full_Documentation
            </span>
          </button>
        </div>
      </div>

      {/* Level 3: Documentation Detail Panel */}
   {/* Level 3: Documentation Detail Panel */}
<AnimatePresence>
  {isOpen && (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-black/80"
      onClick={() => setIsOpen(false)}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 50, rotateX: 10 }}
        animate={{ scale: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.9, y: 50, rotateX: 10 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-50 dark:bg-zinc-950 rounded-[3rem] border border-blue-500/40 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col"
      >
        {/* Top Header Bar - Dossier Style */}
        <div className="p-6 border-b border-zinc-500/10 flex justify-between items-center bg-zinc-100/50 dark:bg-zinc-900/50 font-mono text-[10px]">
          <div className="flex items-center gap-4">
            <span className="text-blue-500 font-black animate-pulse">● SYSTEM_LOG_CV_v2.6</span>
            <span className="text-zinc-400 hidden md:block">AUTH_LEVEL: ROOT</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="group flex items-center gap-2 text-zinc-500 hover:text-red-500 transition-colors"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Abort</span>
            <span className="text-xl">[ × ]</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-16">
          
          {/* Section: Professional Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <h4 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Experience_Log</h4>
              <p className="text-zinc-400 text-xs uppercase font-mono italic">Compiled: Jan 2026</p>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div className="relative border-l border-blue-500/30 pl-8 pb-2">
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-1 shadow-[0_0_10px_#3b82f6]" />
                <h5 className="text-black dark:text-white font-black text-xl uppercase tracking-tighter">Fullstack Engineer</h5>
                <p className="text-blue-500 font-mono text-[10px] mb-4">2025 — PRESENT [LEVEL_UP]</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed lowercase">
                  Architecting end-to-end systems. implementing robust backend logic with python and high-performance frontends using the react/next.js ecosystem.
                </p>
              </div>
              
              <div className="relative border-l border-zinc-500/20 pl-8">
                <div className="absolute w-2 h-2 bg-zinc-500/20 rounded-full -left-[4.5px] top-1" />
                <h5 className="text-zinc-400 font-black text-xl uppercase tracking-tighter">Core Development Phase</h5>
                <p className="text-zinc-500 font-mono text-[10px] mb-4">2022 — 2024 [4YRS_TOTAL_XP]</p>
                <p className="text-zinc-500/60 text-sm leading-relaxed lowercase">
                  Dedicated to perfecting interface engineering and mobile architectures. developed cross-platform solutions with flutter and optimized styling with tailwindcss.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Technical Stack Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 border-t border-zinc-500/10">
            <div className="lg:col-span-4">
              <h4 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">Primary_Modules</h4>
            </div>
            <div className="lg:col-span-8 flex flex-wrap gap-4 font-mono">
              {[
                { name: 'React', val: '98%' },
                { name: 'TypeScript', val: '95%' },
                { name: 'Python', val: '88%' },
                { name: 'Tailwind', val: '100%' },
                { name: 'Flutter', val: '92%' }
              ].map((tech) => (
                <div key={tech.name} className="px-4 py-2 border border-zinc-500/10 rounded-lg flex items-center gap-3 bg-zinc-500/5 group hover:border-blue-500 transition-colors">
                  <span className="text-black dark:text-white text-[10px] font-black uppercase tracking-widest">{tech.name}</span>
                  <span className="text-blue-500 text-[8px] opacity-50 group-hover:opacity-100">{tech.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: The Call to Action */}
            <div className="bg-blue-500/5 rounded-3xl p-8 md:p-12 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2">
                <h5 className="text-black dark:text-white font-black text-2xl uppercase tracking-tight">System_Ready_for_Deployment</h5>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest leading-relaxed">
                    Schedule a 15m technical discovery call to sync on requirements.
                </p>
                </div>
                
                <motion.a 
                href="/path-to-your-cv.pdf" 
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] text-center flex items-center justify-center gap-3"
                >
                <span className="animate-bounce">↓</span> Book_Meeting.exe
                </motion.a>
            </div>

        </div>

        {/* Footer Bar */}
        <div className="p-4 bg-zinc-100/30 dark:bg-zinc-900/30 border-t border-zinc-500/10 text-center font-mono text-[8px] text-zinc-500 uppercase tracking-[0.5em]">
          End_of_Transmission // Version_Control_Stable
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}