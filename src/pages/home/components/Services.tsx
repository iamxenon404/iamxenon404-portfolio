import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { id: 'UIUX', title: 'UI/UX Design', desc: 'Crafting high-end, interactive interfaces.', color: 'from-pink-500/10', focus: 'md:col-span-8 md:row-span-2', details: 'I design focused user experiences using Figma, focusing on motion, accessibility, and modern aesthetics before touching a single line of code.' },
  { id: 'WEB', title: 'Web Apps', desc: 'Building fast, SEO-ready web platforms.', color: 'from-emerald-500/10', focus: 'md:col-span-9 md:row-span-2', details: 'Specializing in Next.js and React to build scalable dashboards, SaaS platforms, and complex web tools with optimized performance.' },
  { id: 'MOBILE', title: 'Mobile Apps', desc: 'Native-feel iOS & Android development.', color: 'from-purple-500/10', focus: 'md:col-span-6 md:row-span-2', details: 'Developing cross-platform mobile solutions with React Native, ensuring smooth animations and native feature integration.' },
  { id: 'AI', title: 'AI Integration', desc: 'Leveraging LLMs for smart automation.', color: 'from-cyan-500/10', focus: 'md:col-span-6 md:row-span-2', details: 'I integrate AI models (OpenAI, Anthropic) into existing apps to handle data processing, chatbots, and automated content generation.' },
  { id: 'BACKEND', title: 'Backend Dev', desc: 'Secure APIs and database architecture.', color: 'from-orange-500/10', focus: 'md:col-span-7 md:row-span-2', details: 'Designing robust server-side logic, PostgreSQL/NoSQL databases, and authentication systems that keep your data safe and fast.' },
  { id: 'FULLSTACK', title: 'End-to-End', desc: 'Taking a product from zero to launch.', color: 'from-blue-500/10', focus: 'md:col-span-12 md:row-span-1', details: 'The complete package. I handle the entire lifecycle of your project, ensuring the design, frontend, and backend work in perfect harmony.' }
];

export default function ServicesBento() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [systemLoad, setSystemLoad] = useState("0.00%");

  // Random dev-feel system load updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemLoad((Math.random() * 0.1).toFixed(3) + "%");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getSpan = (service: typeof services[0], isActive: boolean) => {
    if (isActive) return service.focus;
    switch (service.id) {
      case 'WEB': return 'md:col-span-4 md:row-span-2';
      case 'BACKEND': return 'md:col-span-5 md:row-span-2';
      case 'FULLSTACK': return 'md:col-span-7 md:row-span-1';
      case 'AI': return 'md:col-span-3 md:row-span-1';
      case 'UIUX': return 'md:col-span-4 md:row-span-1';
      default: return 'md:col-span-4 md:row-span-1';
    }
  };

  return (
    <section className="w-full py-32 px-6 md:px-20 bg-(--bg-color) overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* DEV SYSTEM HEADER */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-500/10 pb-8 gap-6">
          <div className="space-y-4">
            <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase font-black flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Service_Modules_v2.0
            </h2>
            <h3 className="text-black dark:text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
              What I <br /> <span className="text-zinc-300 dark:text-zinc-800">Can Do.</span>
            </h3>
          </div>
          <div className="font-mono text-[10px] text-zinc-500 space-y-1">
            <p className="uppercase tracking-widest">System_Status: <span className="text-green-500">Stable</span></p>
            <p className="uppercase tracking-widest">Network_Load: {systemLoad}</p>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
          {services.map((service) => {
            const isActive = activeId === service.id;
            
            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setActiveId(isActive ? null : service.id)}
                transition={{
                  layout: { duration: 0.6, type: "spring", stiffness: 160, damping: 22 },
                }}
                className={`relative group rounded-[2rem] border border-(--glass-border) bg-(--glass-bg) p-8 md:p-10 flex flex-col justify-between ${getSpan(service, isActive)} ${isActive ? 'z-20 min-h-fit ring-2 ring-blue-500/20' : 'z-10'} cursor-pointer transition-shadow hover:shadow-xl overflow-hidden`}
              >
                {/* BIG CENTERED WATERMARK */}
                {!isActive && (
                  <span className="absolute inset-0 flex items-center justify-center text-[180px] font-black text-black dark:text-white opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-500">
                    {service.id.charAt(0)}
                  </span>
                )}

                {/* SCANLINE LOADER EFFECT */}
                {isActive && (
                  <motion.div 
                    initial={{ top: "-100%" }}
                    animate={{ top: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent z-0 pointer-events-none"
                  />
                )}

                {isActive && (
                  <motion.div layoutId="activeGlow" className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-40 z-0`} />
                )}

                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[9px] font-mono font-black tracking-widest px-2 py-1 rounded border transition-all ${isActive ? 'bg-blue-500 border-blue-500 text-white' : 'text-zinc-500 border-zinc-500/20'}`}>
                      0{services.indexOf(service) + 1} // {service.id}
                    </span>
                    <span className="text-zinc-400 font-mono text-[9px] uppercase tracking-tighter">
                      {isActive ? '[ Escape_to_Close ]' : '// Read_More'}
                    </span>
                  </div>
                  
                  <h4 className={`text-black dark:text-white font-black uppercase tracking-tighter transition-all duration-500 leading-none ${isActive ? 'text-4xl md:text-6xl mb-4' : 'text-2xl'}`}>
                    {service.title}
                  </h4>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative"
                      >
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base max-w-xl lowercase leading-relaxed mb-6">
                          <span className="text-blue-500 font-mono mr-2">{'>'}</span>
                          {service.details}
                          <span className="inline-block w-2 h-4 bg-blue-500 ml-2 animate-pulse align-middle" />
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative z-10 flex items-end justify-between">
                  <p className={`text-zinc-400 dark:text-zinc-500 font-mono transition-all ${isActive ? 'text-[9px] uppercase tracking-widest opacity-50' : 'text-[10px] truncate uppercase'}`}>
                    {isActive ? `process_id: 0x${service.id}` : service.desc}
                  </p>
                  
                  {isActive && (
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-black dark:bg-white text-white dark:text-black text-[10px] px-4 py-2 rounded-lg font-black uppercase tracking-widest"
                    >
                      Init_Contact
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}