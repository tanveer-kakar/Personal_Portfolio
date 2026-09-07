import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];

const Footer = ({ viewState = 'home', onViewChange }) => {
  const handleNavClick = (e, href) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    window.history.pushState(null, null, href);

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
  return (
    <footer className="bg-card/30 pt-16 pb-8 border-t border-textPrimary/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-textPrimary font-serif">
              Tanveer Kakar<span className="text-primary">.</span>
            </a>
            <p className="text-textSecondary text-sm max-w-sm leading-relaxed mt-4">
              Passionate about building robust data pipelines and scalable data engineering solutions using Python, PySpark, and Apache Spark to process large datasets reliably.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com/in/tanveer-kakar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-primary transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="https://github.com/Tanveer2507" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-primary transition-all">
                <FaGithub size={18} />
              </a>
              <a href="https://x.com/tanveerkakar_" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-primary transition-all">
                <FaTwitter size={18} />
              </a>
              <a href="https://www.instagram.com/mr_tannu_7774?igsh=MWVpazQwazAzOWMzaA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-textSecondary hover:text-textPrimary hover:border-primary transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-bold text-textPrimary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-textSecondary hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold text-textPrimary mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-textSecondary text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:tanveerkakar294@gmail.com" className="hover:text-primary transition-colors">tanveerkakar294@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-textSecondary text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+918149853942" className="hover:text-primary transition-colors">+91-8149853942</a>
              </div>
              <div className="flex items-center gap-3 text-textSecondary text-sm">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar items */}
        <div className="pt-8 border-t border-textPrimary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-textSecondary text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Tanveer Kakar. All rights reserved.
          </p>
          <div className="text-textSecondary text-sm flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            <button onClick={() => { if(onViewChange) { onViewChange('privacy_policy'); window.scrollTo({top:0,behavior:'smooth'}); }}} className="hover:text-primary transition-colors whitespace-nowrap">Privacy Policy</button>
            <button onClick={() => { if(onViewChange) { onViewChange('terms_of_service'); window.scrollTo({top:0,behavior:'smooth'}); }}} className="hover:text-primary transition-colors whitespace-nowrap">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
