import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Github, Phone, Zap, X, ChevronUp, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#stack' },
  { name: 'Experience', href: '#experience' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
      if (window.scrollY > 150) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Added 'as const' and explicit Variants type to solve the TS2322 error
  const headerVariants: Variants = {
    topInitial: { y: -100, opacity: 0 },
    topAnimate: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 80, damping: 20 } 
    },
    topExit: { 
      y: -100, 
      opacity: 0, 
      transition: { duration: 0.3 } 
    },
    bottomInitial: { y: 150, opacity: 0 },
    bottomAnimate: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 80, damping: 20 } 
    },
    bottomExit: { 
      y: 150, 
      opacity: 0, 
      transition: { duration: 0.3 } 
    }
  } as const;

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center pointer-events-none px-6 py-4">
      
      {/* Mobile Index Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: scrolled ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: scrolled ? 10 : -10 }}
            className={`pointer-events-auto w-full max-w-sm backdrop-blur-2xl border shadow-2xl z-90 
              bg-(--glass-bg) border-(--glass-border)
              ${scrolled ? 'mb-4 rounded-4xl absolute bottom-24' : 'mt-4 rounded-4xl absolute top-20'}`}
          >
            <div className="flex flex-col gap-1 p-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all rounded-2xl
                    text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px my-2 mx-4 bg-black/10 dark:bg-white/10" />
              <div className="flex justify-around py-2">
                <Github size={20} className="text-black dark:text-zinc-400 dark:hover:text-white cursor-pointer" />
                <Phone size={20} className="text-black dark:text-zinc-400 dark:hover:text-white cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Glass Header */}
      <AnimatePresence mode="wait">
        {!scrolled ? (
          <motion.header
            key="top"
            variants={headerVariants}
            initial="topInitial"
            animate="topAnimate"
            exit="topExit"
            className="pointer-events-auto relative flex w-full max-w-5xl items-center justify-between backdrop-blur-3xl border shadow-2xl px-6 py-3 md:py-4 overflow-visible rounded-4xl
              bg-(--glass-bg) border-(--glass-border)"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-white/5 pointer-events-none rounded-[inherit]" />
            
            <LogoSection />

            <nav className="hidden md:flex items-center gap-2 z-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all group whitespace-nowrap
                    text-black dark:text-zinc-300 dark:hover:text-white"
                >
                  {link.name}
                  <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-linear-to-r from-transparent via-black/40 dark:via-white/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </nav>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-10 flex items-center gap-3 px-5 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md active:scale-90 transition-all shadow-inner
                bg-black/5 border-black/20 text-black dark:bg-white/10 dark:border-white/30 dark:text-white"
            >
              Index 
              {isOpen ? <X size={12} /> : <ChevronDown size={12} className="animate-bounce" />}
            </button>

            <ActionIcons className="hidden md:flex" />
          </motion.header>
        ) : (
          <motion.header
            key="bottom"
            variants={headerVariants}
            initial="bottomInitial"
            animate="bottomAnimate"
            exit="bottomExit"
            className="pointer-events-auto relative mt-auto flex w-full max-w-lg md:max-w-2xl items-center justify-between backdrop-blur-3xl border shadow-2xl px-6 py-3 md:py-4 overflow-visible rounded-full
              bg-(--glass-bg) border-(--glass-border)"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-white/5 pointer-events-none rounded-full" />
            
            <LogoSection />

            <nav className="hidden md:flex items-center gap-2 z-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all group whitespace-nowrap
                    text-black dark:text-zinc-300 dark:hover:text-white"
                >
                  {link.name}
                  <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-linear-to-r from-transparent via-black/40 dark:via-white/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </nav>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-10 flex items-center gap-3 px-5 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md active:scale-90 transition-all shadow-inner
                bg-black/5 border-black/20 text-black dark:bg-white/10 dark:border-white/30 dark:text-white"
            >
              Index 
              {isOpen ? <X size={12} /> : <ChevronUp size={12} className="animate-bounce" />}
            </button>

            <ActionIcons className="hidden md:flex" />
          </motion.header>
        )}
      </AnimatePresence>
    </div>
  );
}

const LogoSection = () => {
  return (
    <div className="flex items-center gap-2.5 z-10 shrink-0 cursor-default">
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-7 h-7 rounded-lg flex items-center justify-center shadow-lg
          bg-black text-white dark:bg-white dark:text-black"
      >
        <Zap size={14} className="fill-current" />
      </motion.div>

      <div className="relative">
        <span className="font-black tracking-tighter text-base uppercase bg-clip-text text-transparent bg-shimmer-silver animate-silver-slide">
          Xenon
        </span>
      </div>

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
        @keyframes silver-slide {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-silver-slide {
          animation: silver-slide 2.5s infinite linear;
        }
      `}</style>
    </div>
  );
};

const ActionIcons = ({ className = "" }) => (
  <div className={`items-center gap-2 z-10 shrink-0 ${className}`}>
    <a href="#" className="p-2.5 text-black dark:text-zinc-400 dark:hover:text-white rounded-full transition-all hover:bg-black/5 dark:hover:bg-white/10">
      <Github size={20} />
    </a>
    <a href="#" className="p-2.5 text-black dark:text-zinc-400 dark:hover:text-white rounded-full transition-all border border-transparent hover:border-black/10 dark:hover:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">
      <Phone size={20} />
    </a>
  </div>
);