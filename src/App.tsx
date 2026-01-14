import  { useState, useEffect } from 'react';
import Header from './components/Header';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home/Home';
import SystemFooter from './components/SystemFooter';
// import { Home } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This matches the timing of your Preloader 
    // You can also adjust this based on window.onload
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // Slightly longer than the progress bar animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      
      <main className={loading ? "hidden" : "block"}>
        <Header />
        {/* Your Hero component will go here */}
        {/* <section className="h-[200vh]"> */}
          <Home />
        {/* </section> */}
        <SystemFooter />
      </main>
    </>
  );
}