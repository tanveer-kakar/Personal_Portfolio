import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onLoadingComplete }) => {
  const [phase, setPhase] = useState("loading"); // 'loading' | 'shrinking'

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // After 2.2 seconds, transition out
    const timer1 = setTimeout(() => {
      setPhase("shrinking");
      document.body.style.overflow = "auto";
    }, 2200);

    // After 3 seconds, unmount completely
    const timer2 = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "auto";
    };
  }, [onLoadingComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[10000] bg-[#050505] flex items-center justify-center overflow-hidden"
      animate={{ opacity: phase === "shrinking" ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ pointerEvents: phase === "shrinking" ? "none" : "auto" }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer subtle static ring */}
        <div className={`absolute w-56 h-56 rounded-full border border-white/5 transition-opacity duration-500 ${phase === "shrinking" ? "opacity-0" : "opacity-100"}`}></div>
        
        {/* Animated Rings */}
        <div className={`absolute transition-opacity duration-500 ${phase === "shrinking" ? "opacity-0" : "opacity-100"}`}>
           {/* Ring 1 - Primary color (glowy) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-t-[3px] border-r-[1px] border-b-[1px] border-l-[1px] border-transparent border-t-primary animate-spin shadow-[0_0_20px_rgba(0,208,156,0.3)]"></div>
           {/* Ring 2 - White/Gray color (smaller) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11rem] h-[11rem] rounded-full border-b-[2px] border-t-[1px] border-r-[1px] border-l-[1px] border-transparent border-b-white/80 animate-[spin_2s_linear_reverse_infinite]"></div>
           {/* Glow circle behind text */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        </div>

        {/* Text animating to top left */}
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={
             phase === "loading" 
               ? { scale: 1, opacity: 1 } 
               : { scale: 0.5, y: "-40vh", x: "-42vw", opacity: 0 }
           }
           transition={{ 
             duration: phase === "loading" ? 1 : 0.8, 
             ease: "easeInOut" 
           }}
           className="font-serif text-6xl font-black tracking-widest flex z-10"
        >
           <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] relative right-[-2px]">T</span>
           <span className="text-primary drop-shadow-[0_0_20px_rgba(0,208,156,0.6)]">K</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
