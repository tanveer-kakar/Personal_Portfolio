import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mainLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

const moreLinks = [
  { name: "Certifications", href: "#certifications" },
  { name: "Contact Me", href: "#contact" }
];

const allLinks = [...mainLinks, ...moreLinks];

const Navbar = ({ viewState = 'home', onViewChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("#home");

  let displayActiveSection = activeSection;
  if (viewState === 'all_projects') displayActiveSection = '#projects';
  if (viewState === 'all_certificates') displayActiveSection = '#certifications';

  const handleNavClick = (e, href) => {
    e.preventDefault();
    window.history.pushState(null, null, href);
    setActiveSection(href);
    setIsOpen(false);

    if (onViewChange && viewState !== 'home') {
      onViewChange('home');
      setTimeout(() => {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
      }
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (viewState !== 'home') return;

      let current = "";
      for (const link of allLinks) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - window.innerHeight / 3) {
          current = link.href;
        }
      }
      if (current) {
        setActiveSection((prev) => {
          if (prev !== current) {
            window.history.replaceState(null, null, current);
            return current;
          }
          return prev;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [viewState]);

  useEffect(() => {
    const activeLink = allLinks.find(link => link.href === displayActiveSection);
    if (activeLink) {
      document.title = `Tanveer Kakar | Data Engineer - ${activeLink.name}`;
    } else {
      document.title = "Tanveer Kakar | Data Engineer";
    }
  }, [displayActiveSection]);



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card py-4" : "bg-transparent py-6"
        } px-6 md:px-12`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <a href="#home" className="flex items-center group shrink-0">
          <span className="text-textSecondary text-xl font-light font-mono group-hover:text-primary transition-colors mr-1.5">&lt;</span>
          <span className="font-signature text-2xl md:text-[2rem] font-bold tracking-wide mt-1 text-textPrimary drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] whitespace-nowrap">Tanveer Kakar</span>
          <span className="text-textSecondary text-xl font-light font-mono group-hover:text-primary transition-colors ml-2">/&gt;</span>
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
          {/* Desktop Nav */}
          <nav className="flex space-x-1 xl:space-x-3 items-center">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[13px] xl:text-sm font-medium px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${displayActiveSection === link.href
                  ? "bg-primary/20 text-primary font-bold"
                  : "text-textSecondary hover:text-primary pt-0.5"
                  }`}
              >
                {link.name}
              </a>
            ))}

            {/* More Dropdown */}
            <div className="relative group flex items-center h-full">
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-textSecondary hover:text-primary transition-colors text-[13px] xl:text-sm font-medium focus:outline-none whitespace-nowrap">
                More <ChevronDown size={14} className="mt-0.5" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-[220px] rounded-xl bg-card border border-textPrimary/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 translate-y-2 z-50">
                <div className="py-2 flex flex-col">
                  {moreLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-5 py-2.5 text-sm font-medium transition-colors text-left block ${displayActiveSection === link.href
                        ? "bg-primary/20 text-textPrimary border-l-4 border-primary"
                        : "text-textSecondary hover:text-textPrimary hover:bg-textPrimary/5 border-l-4 border-transparent"
                        }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          </div>

          <div className="flex items-center space-x-3 xl:space-x-5 lg:border-l border-textPrimary/10 lg:pl-3 xl:pl-5 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-[3.5rem] h-8 rounded-full flex shrink-0 items-center p-1 cursor-pointer transition-colors relative ${!isDarkMode ? 'bg-[#cbd5e1]' : 'bg-[#1e293b]'}`}
              aria-label="Toggle Dark Mode"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 absolute ${!isDarkMode ? "bg-white translate-x-0" : "bg-primary translate-x-6"
                  }`}
              >
                {isDarkMode ? <Moon size={14} className="text-black" /> : <Sun size={14} className="text-black" />}
              </div>
            </button>

            {/* Download Resume Button */}
            <a
              href="/Tanveer_Kakar_Data_Engineer.pdf"
              download="Tanveer_Kakar_Data_Engineer.pdf"
              className="hidden lg:flex bg-primary hover:bg-secondary text-[#050505] px-4 py-[0.45rem] rounded-full text-[13px] xl:text-sm font-bold transition-all items-center gap-1.5 shadow-[0_0_10px_rgba(0,208,156,0.3)] whitespace-nowrap shrink-0"
            >
              <Download size={16} className="text-black" />
              Download Resume
            </a>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-textPrimary focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 glass-card mx-4 p-4 flex flex-col space-y-4 md:hidden"
          >
            {allLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors text-center font-medium py-2 rounded-lg ${displayActiveSection === link.href
                  ? "bg-primary/20 text-primary"
                  : "text-textSecondary hover:text-textPrimary"
                  }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Download Resume */}
            <div className="pt-2 mt-2 border-t border-textPrimary/10">
              <a
                href="/Tanveer_Kakar_Data_Engineer.pdf"
                download="Tanveer_Kakar_Data_Engineer.pdf"
                className="bg-primary hover:bg-secondary text-[#050505] px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(0,208,156,0.3)] w-full"
              >
                <Download size={16} className="text-black" />
                Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
