import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stackData, allProjects } from '../../types/data';
import type { Project } from '../../types/data';

export default function Stack() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // FIX: Prevent background scrolling when project modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const tools = Object.values(stackData);

  const getSpan = (id: string) => {
    switch (id) {
      case 'JS': return 'md:col-span-2 md:row-span-1';
      case 'PY': 
      case 'DB': return 'md:col-span-1 md:row-span-2';
      case 'TOOLS': return 'md:col-span-1 md:row-span-1';
      case 'CLOUD':
      case 'ENGINES': return 'md:col-span-2 md:row-span-1';
      default: return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section className="w-full py-24 px-6 md:px-20 bg-(--bg-color) transition-colors duration-500 min-h-200 relative overflow-x-hidden" id='stack'>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-500 mb-4">
              {activeId ? `Systems // ${activeId}` : "Technical Ecosystem"}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-(--text-color)">
              {activeId ? stackData[activeId].name : "The Stack"} 
              <span className="text-zinc-400 dark:text-zinc-600 ml-4">01</span>
            </h3>
          </div>

          {activeId && (
            <button 
              onClick={() => {
                setActiveId(null);
                setSelectedProject(null);
              }}
              className="px-6 py-2 rounded-full border border-blue-500/50 text-blue-500 text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Back to Grid
            </button>
          )}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!activeId ? (
              /* THE BENTO GRID (LVL 1) */
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
              >
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 0.98 }}
                    onClick={() => setActiveId(tool.id)}
                    className={`relative group cursor-pointer overflow-hidden rounded-3xl border border-(--glass-border) bg-(--glass-bg) backdrop-blur-xl p-8 flex flex-col justify-between ${getSpan(tool.id)} shadow-xl shadow-black/5 dark:shadow-none`}
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${tool.color} blur-3xl -z-10`} />
                    <div className="flex justify-between items-start">
                      <span className="text-3xl font-black text-(--text-color) opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 uppercase">
                        {tool.icon}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-(--text-color)/10 flex items-center justify-center group-hover:rotate-45 group-hover:bg-(--text-color) group-hover:text-(--bg-color) transition-all duration-300">
                        <span className="text-xs">↗</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-blue-500 mb-1">{tool.category}</p>
                      <h4 className="text-xl font-bold text-(--text-color) mb-2">{tool.name}</h4>
                      <p className="text-[10px] leading-relaxed text-zinc-500 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                        Click to explore specialized {tool.name} technologies.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* DYNAMIC DETAILED CONTENT (LVL 2) */
              <motion.div 
                key="detail"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6"
              >
                {/* 1. THE COMMAND CENTER (Hero) */}
                <div className="md:col-span-8 rounded-[2.5rem] md:rounded-[3rem] border border-(--glass-border) bg-(--glass-bg) backdrop-blur-3xl p-6 md:p-12 flex flex-col justify-between relative overflow-hidden group min-h-112.5 md:min-h-125 shadow-2xl shadow-blue-500/5">
                  <div className={`absolute -top-24 -left-24 w-96 h-96 blur-[120px] opacity-30 dark:opacity-20 ${stackData[activeId].color} animate-pulse`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8 md:mb-12">
                      <span className="text-5xl md:text-7xl drop-shadow-2xl">{stackData[activeId].icon}</span>
                      <div className="h-px flex-1 bg-linear-to-r from-blue-500/40 via-blue-500/10 to-transparent" />
                    </div>
                    <h4 className="text-4xl sm:text-5xl md:text-7xl font-black text-(--text-color) uppercase tracking-tighter leading-[0.9] mb-6  wrap-break-word">
                      {stackData[activeId].name}
                    </h4>
                    <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-blue-500/20 bg-blue-500/10 dark:bg-blue-500/5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">System_Online</span>
                    </div>
                  </div>

                  <div className="relative z-10 border-t border-(--glass-border) pt-8 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-end">
                    <div className="space-y-4 w-full">
                      <div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-[10px] uppercase tracking-widest mb-1">Architecture</p>
                        <p className="text-(--text-color) text-base md:text-lg font-bold uppercase tracking-tighter">{stackData[activeId].category}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center font-mono text-[8px] text-blue-600 dark:text-blue-500/60 uppercase tracking-widest">
                          <span>Data_Buffer</span>
                          <span>{stackData[activeId].stability === "100%" ? "Synchronized" : "Buffering..."}</span>
                        </div>
                        <div className="flex gap-1 md:gap-1.5">
                          {[...Array(10)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ 
                                opacity: i < 7 ? [0.4, 1, 0.4] : 0.2,
                                backgroundColor: i < 7 ? "#3b82f6" : "var(--glass-border)" 
                              }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                              className="h-3 w-1.5 md:h-3.5 md:w-2 rounded-[1px] border border-black/5 dark:border-white/5"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:text-right space-y-2 w-full">
                      <p className="text-zinc-500 dark:text-zinc-400 text-[10px] uppercase tracking-widest mb-1">Stability_Index</p>
                      <p className="text-blue-600 dark:text-blue-400 font-mono text-2xl md:text-3xl font-black">
                        {stackData[activeId].stability}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. THE TECH VAULT (Sub-Bento) */}
                <div className="md:col-span-4 rounded-[2.5rem] md:rounded-[3rem] border border-(--glass-border) bg-(--glass-bg) backdrop-blur-3xl p-4 flex flex-col shadow-xl shadow-blue-500/5">
                  <div className="mb-4 px-4 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    <span>Sub_Modules</span>
                    <span className="font-mono text-blue-600 dark:text-blue-500/50">{stackData[activeId].subStack.length} UNITS</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {stackData[activeId].subStack.map((tech, i) => {
                      const isWide = i === 0 || (i === 3 && stackData[activeId].subStack.length > 4);
                      return (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 0.98, borderColor: "rgba(59, 130, 246, 0.5)" }}
                          className={`relative group overflow-hidden rounded-[1.8rem] md:rounded-4xl border border-(--glass-border) bg-white/40 dark:bg-black/20 p-5 md:p-6 flex flex-col justify-between transition-all ${isWide ? 'col-span-2' : 'col-span-1'}`}
                        >
                          <div className={`absolute inset-0 opacity-0 group-hover:opacity-25 dark:group-hover:opacity-10 transition-opacity duration-500 ${stackData[activeId].color} blur-2xl`} />
                          <span className="text-[8px] text-zinc-500 dark:text-zinc-600 font-mono relative z-10">MOD_0{i}</span>
                          <span className="text-[10px] md:text-[11px] font-black text-(--text-color) uppercase tracking-widest group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all relative z-10">
                            {tech}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. MAIN STATUS FOOTER */}
                <div className="md:col-span-12 min-h-25 md:h-28 rounded-4xl md:rounded-[2.5rem] border border-(--glass-border) bg-(--glass-bg) backdrop-blur-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 overflow-hidden relative shadow-xl shadow-blue-500/5">
                  <div className="flex flex-col gap-2 w-full md:min-w-50 relative z-10">
                    <div className="flex justify-between text-[8px] font-black uppercase text-zinc-500 tracking-[0.2em]">
                      <span>Sync_Progress</span>
                      <span className="text-blue-600 dark:text-blue-500 animate-pulse font-mono">Running...</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800/50 rounded-full overflow-hidden p-px">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="h-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-4 gap-4 opacity-30 relative z-10  md:grid">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex flex-col gap-1.5">
                        <div className="h-0.5 w-full bg-zinc-300 dark:bg-zinc-700" />
                        <div className="h-0.5 w-[60%] bg-zinc-200 dark:bg-zinc-800" />
                      </div>
                    ))}
                  </div>
                </div>

{/* LEVEL 2.5: THE 3D PROJECT MARQUEE */}
<div className="md:col-span-12 mt-20 relative">
  <div className="flex justify-between items-end mb-12 px-4">
    <div className="space-y-1">
      <p className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase font-black">Archive_Index</p>
      <h5 className="text-black dark:text-white font-black uppercase tracking-tighter text-4xl">Selected_Works</h5>   
    </div>
    <div className="flex gap-4 items-center">
       <div className="w-12 h-px bg-white/10" />
       <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest leading-none italic">
         Filtering_By: {activeId || 'ALL'}
       </span>
    </div>
  </div>

  <div 
    className="relative w-full overflow-hidden"
    style={{
      maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
    }}
  >
    <motion.div 
      className="flex gap-12 w-max py-10"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 20, // Adjust speed as needed
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {(() => {
        // 1. Filter projects that include the active programming language ID
        const filteredProjects = allProjects.filter(p => 
          activeId ? p.categoryIds.includes(activeId) : true
        );

        // 2. Safeguard: If no projects match, display a clean fallback notice container
        if (filteredProjects.length === 0) {
          return (
            <div className="w-full text-center py-10 font-mono text-zinc-500 text-sm tracking-wider">
              [ NO_PROJECTS_DEPLOYED_FOR_THIS_STACK ]
            </div>
          );
        }

        // 3. Carousel Duplication Engine: Ensure there are enough cards to make the infinite scroll smooth
        let marqueeItems = [...filteredProjects];
        while (marqueeItems.length < 6) {
          marqueeItems = [...marqueeItems, ...filteredProjects];
        }

        // 4. Render the items
        return marqueeItems.map((project, idx) => (
          <motion.div
            key={`${project.id}-${idx}`}
            whileHover={{ y: -15 }}
            onClick={() => setSelectedProject && setSelectedProject(project)}
            className="relative group cursor-pointer"
          >
            <div className="w-[360px] md:w-[520px] aspect-video rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-950/50 relative">
{/* Light Mode Image: Hidden by default, block when theme is light, hidden again in Tailwind dark mode */}
<img 
  src={project.lightImage || project.image} 
  alt={project.title} 
  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 dark:hidden"
/>

{/* Dark Mode Image: Hidden by default, block only when Tailwind detects dark mode */}
<img 
  src={project.image} 
  alt={project.title} 
  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 hidden dark:block"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="opacity-0 group-hover:opacity-100 text-blue-500 font-mono text-[9px] uppercase tracking-widest transition-opacity duration-300">
                    System_Build_0{ (idx % filteredProjects.length) + 1 }
                  </span>
                  <h6 className="text-white font-black uppercase tracking-tighter text-2xl md:text-3xl leading-none">
                    {project.title}
                  </h6>
                  <p className="text-zinc-400 text-xs font-mono opacity-0 group-hover:opacity-100 line-clamp-1 transition-all duration-500 delay-200">
                    {project.tech.join(" // ")}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ));
      })()}
    </motion.div>
  </div>
</div>
              </motion.div>
            )}
          </AnimatePresence>

{/* LEVEL 3: PROJECT DEEP DIVE OVERLAY */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-3xl bg-black/40 dark:bg-black/80 overflow-y-auto"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0, rotateX: 10 }}
        animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-7xl h-fit max-h-[90vh] overflow-y-auto no-scrollbar rounded-4xl border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-2xl dark:shadow-[0_0_100px_rgba(0,0,0,1)] relative p-1 transition-colors duration-300"
      >
        <div className="absolute inset-0 rounded-4xl border border-blue-500/10 dark:border-blue-500/20 pointer-events-none" />

        <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-[1.9rem] p-6 md:p-10 relative overflow-hidden transition-colors duration-300">
          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
                <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] font-black uppercase">Project_Dossier_v2.0</span>
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-none transition-colors duration-300">
                {selectedProject.title}
              </h3>
            </div>
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="group relative px-8 py-3 overflow-hidden rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white font-mono text-[10px] uppercase tracking-widest hover:border-red-500/50 transition-all"
            >
              <span className="relative z-10 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">Terminate_Session</span>
              <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 transition-all" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* 1. VISUAL INTERFACE (8/12) */}
            <div className="md:col-span-8 space-y-6">
              <div className="relative group aspect-video rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-200 dark:bg-black transition-colors duration-300">
                <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
                
                <img 
                  src={selectedProject.lightImage || selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 dark:hidden transition-all duration-700" 
                />
                <img 
                  src={selectedProject.image} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 hidden dark:block transition-all duration-700" 
                  alt={selectedProject.title} 
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-zinc-950 z-10 transition-colors duration-300" />
                <div className="absolute top-6 left-6 z-30 flex gap-2">
                  <div className="px-3 py-1 bg-blue-500/10 backdrop-blur-md border border-blue-500/30 rounded-full text-[8px] font-black text-blue-500 dark:text-blue-400 uppercase tracking-widest">
                    Encrypted_Stream
                  </div>
                  <div className="px-3 py-1 bg-white/60 dark:bg-black/40 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full text-[8px] font-black text-zinc-600 dark:text-white/50 uppercase tracking-widest transition-colors duration-300">
                    {selectedProject.id}
                  </div>
                </div>
              </div>

              {/* TERMINAL BOX */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-4xl bg-white dark:bg-black/40 border border-zinc-200 dark:border-white/5 font-mono text-sm leading-relaxed transition-colors duration-300">
                   <p className="text-blue-600 dark:text-blue-500/60 text-[9px] font-black uppercase tracking-widest mb-4">Description_Module</p>
                   <p className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                    {selectedProject.description}
                   </p>
                </div>
                
                <div className="p-8 rounded-4xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 font-mono relative overflow-hidden transition-colors duration-300">
                   <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-4">Console_Logs</p>
                   <div className="space-y-1 text-[10px]">
                      <p className="text-emerald-600 dark:text-emerald-500/80">&gt; Initializing build process...</p>
                      <p className="text-zinc-500 dark:text-zinc-600">&gt; Loading environment configs</p>
                      <p className="text-zinc-500 dark:text-zinc-600">&gt; Handshake with {selectedProject.title} API</p>
                      <p className="text-blue-600 dark:text-blue-400 animate-pulse">&gt; Ready for deployment</p>
                   </div>
                   <div className="absolute bottom-0 right-0 left-0 h-12 flex items-end gap-1 px-4 opacity-10 dark:opacity-20">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="flex-1 bg-blue-500" style={{ height: `${Math.random() * 100}%` }} />
                      ))}
                   </div>
                </div>
              </div>
            </div>

            {/* 2. SPECIFICATION MATRIX (4/12) */}
            <div className="md:col-span-4 space-y-6">
              <div className="rounded-[2.5rem] border border-blue-500/10 bg-gradient-to-br from-blue-500/5 to-transparent p-8">
                <div className="flex justify-between items-center mb-10">
                  <h4 className="text-zinc-800 dark:text-white text-xs font-black uppercase tracking-[0.3em] transition-colors">Core_Tech</h4>
                  <div className="px-2 py-0.5 rounded bg-blue-500 text-[8px] font-black text-white">001</div>
                </div>
                
                <div className="space-y-6">
                  {selectedProject.tech.map((t, i) => (
                    <div key={t} className="space-y-2 group">
                      <div className="flex justify-between items-end">
                        <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[9px]">0{i+1}.SYS</span>
                        <span className="text-zinc-900 dark:text-white font-black uppercase tracking-widest text-[11px] group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                          {t}
                        </span>
                      </div>
                      <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden p-[1px]">
                         <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: i * 0.1, duration: 1 }}
                          className="h-full bg-blue-500/40 rounded-full" 
                         />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-4 transition-colors duration-300">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase">
                      <span className="text-zinc-400 dark:text-zinc-500">Stability_Index</span>
                      <span className="text-blue-500">Operational</span>
                    </div>
                    <div className="text-5xl font-black text-zinc-900 dark:text-white tracking-tighter transition-colors duration-300">
                      {selectedProject.stars || "S+"}
                    </div>
                </div>
              </div>

              {/* ACTION COMMANDS */}
              <div className="space-y-3">
                {/* 🔥 FIXED: Only renders if github property exists and is not an empty string */}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="block p-5 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-black font-black uppercase text-center tracking-widest hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all">
                    Open_Source_Repo
                  </a>
                )}
                
                {selectedProject.link && (
                  <a href={selectedProject.link} target="_blank" rel="noreferrer" className="block p-5 rounded-2xl border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white font-black uppercase text-center tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                    Launch_Production
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
        </div> 
      </div>
    </section>
  );
}