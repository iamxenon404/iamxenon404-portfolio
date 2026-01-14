import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SystemFooter() {
  const [timestamp, setTimestamp] = useState("");

  // Live UTC Clock for that "Global Dev" feel
  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date().toUTCString().toUpperCase());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-(--bg-color) pt-20 pb-10 px-6 md:px-20 border-t border-zinc-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Top: Big "Call to Action" Footer Style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-4">
            <h2 className="text-zinc-500 font-mono text-[10px] tracking-[0.5em] uppercase font-black">
              Ready_To_Deploy?
            </h2>
            <h3 className="text-black dark:text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Let's build <br /> <span className="text-blue-500">The Future.</span>
            </h3>
          </div>
          
          <motion.a 
            href="https://cal.com/xenon-hquxnj/15min"
            whileHover={{ scale: 1.05 }}
            className="px-12 py-6 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-widest text-[10px] shadow-2xl"
          >
            Start_Connection_Async
          </motion.a>
        </div>

        {/* Middle: Data Matrix Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-y border-zinc-500/10 py-16">
          <div className="space-y-6">
            <h4 className="text-blue-500 font-mono text-[10px] uppercase tracking-widest font-black">Modules</h4>
            <ul className="space-y-3 text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">// UI_UX_DESIGN</li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">// FULL_STACK_DEV</li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">// MOBILE_SYSTEMS</li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">// AI_PIPELINES</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-blue-500 font-mono text-[10px] uppercase tracking-widest font-black">Network</h4>
            <ul className="space-y-3 text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">
              <li><a href="https://github.com/iamxenon404" className="hover:text-black dark:hover:text-white transition-colors">GitHub_Repo</a></li>
              {/* <li><a href="https://www.linkedin.com/in/xenon-coder-35904935b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn_Profile</a></li> */}
              <li><a href="https://x.com/iamxenon404" className="hover:text-black dark:hover:text-white transition-colors">Twitter_X</a></li>
            </ul>
          </div>

          <div className="col-span-2 space-y-6 md:text-right">
            <h4 className="text-blue-500 font-mono text-[10px] uppercase tracking-widest font-black">System_Vitals</h4>
            <div className="space-y-2 text-[10px] font-mono text-zinc-500 uppercase">
              {/* <p>Location: [4.8156° N, 7.0498° E] // LAGOS_NG</p> */}
              <p>Time_Stream: {timestamp}</p>
              <p>Status: <span className="text-green-500 animate-pulse">● ACCEPTING_NEW_CLIENTS</span></p>
            </div>
          </div>
        </div>

        {/* Bottom: Final Copyright & Data Stream */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-blue-500/30 hidden md:block" />
            <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.3em]">
              © 2026 // ALL_RIGHTS_RESERVED // KERNEL_ARCHITECT
            </p>
          </div>
          
          <div className="flex gap-8 font-mono text-[8px] text-zinc-500 uppercase tracking-widest">
            <span className="hover:text-blue-500 cursor-pointer">Privacy_Policy</span>
            <span className="hover:text-blue-500 cursor-pointer">Terms_Of_Service</span>
            <span className="text-blue-500/20">v2.0.4-STABLE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}