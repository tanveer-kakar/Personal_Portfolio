import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
        {/* Left Content */}
        <motion.div 
          className="flex-1 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-serif font-black mb-2 text-textPrimary tracking-tight leading-tight">
            Tanveer Kakar
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-secondary mb-4 font-bold tracking-wide">
            Data Engineer
          </h2>
          <p className="text-textSecondary mb-8 text-lg font-medium">
            Currently at <span className="text-secondary font-bold">Marca Solutions</span> · Pune, Maharashtra
          </p>
          <p className="text-textPrimary/90 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed text-base pt-2">
            Passionate about building robust data pipelines and scalable data engineering solutions. Experienced in ETL/ELT workflows, PySpark, Apache Spark, and SQL to process large datasets and deliver reliable, high-quality data for downstream analytics and business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 relative px-4 sm:px-0">
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="bg-primary hover:bg-secondary text-[#050505] px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center shadow-[0_0_15px_rgba(0,208,156,0.3)] w-full sm:w-auto">
              View My Work
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="bg-transparent border border-textPrimary/30 hover:border-primary hover:text-primary text-textPrimary px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center w-full sm:w-auto">
              Get In Touch
            </a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
            <span className="text-textSecondary text-sm font-medium">Follow me:</span>
            <a href="https://linkedin.com/in/tanveer-kakar" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-textPrimary transition-colors"><FaLinkedin size={22} /></a>
            <a href="https://github.com/tanveer-kakar" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-textPrimary transition-colors"><FaGithub size={22} /></a>
            <a href="https://x.com/tanveerkakar_" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-textPrimary transition-colors"><FaTwitter size={22} /></a>
            <a href="https://www.instagram.com/mr_tannu_7774?igsh=MWVpazQwazAzOWMzaA==" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-textPrimary transition-colors"><FaInstagram size={22} /></a>
          </div>
        </motion.div>
        
        {/* Right Photo */}
        <motion.div 
          className="flex-1 max-w-md w-full relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] -z-10" />
          <div className="rounded-full aspect-square overflow-hidden border-[3px] border-primary/40 shadow-[-10px_10px_30px_rgba(34,197,94,0.2)] flex items-center justify-center relative z-10 bg-transparent">
            <img 
              src="/profile.png" 
              alt="Tanveer Kakar" 
              className="w-full h-full object-cover rounded-full transition-all duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-secondary cursor-pointer z-10">
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}><ArrowDown size={30} /></a>
      </div>
    </section>
  );
};

export default Hero;
