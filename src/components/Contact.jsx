import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

// Web3Forms key for email notifications (optional, set in Netlify env vars)
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      let success = false;

      // ── Primary: Netlify serverless function → saves to PostgreSQL ─────────
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          success = true;
        } else {
          console.error("DB save error:", result.error);
        }
      } catch (dbErr) {
        console.error("DB fetch failed:", dbErr.message);
      }

      // ── Secondary: Web3Forms → email notification to inbox ─────────────────
      if (WEB3FORMS_KEY) {
        try {
          const payload = new FormData();
          payload.append("access_key", WEB3FORMS_KEY);
          payload.append("name", formData.name);
          payload.append("email", formData.email);
          payload.append("message", formData.message);
          payload.append("subject", `New message from ${formData.name} — Portfolio Contact`);
          payload.append("from_name", "Tanveer Kakar Portfolio");

          const w3res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: payload,
          });
          const w3data = await w3res.json();
          if (w3data.success) success = true;
          else console.error("Web3Forms error:", w3data.message);
        } catch (w3Err) {
          console.error("Web3Forms failed:", w3Err.message);
        }
      }

      if (success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error("Error submitting form:", error);
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <section id="contact" className="py-4 px-4 md:px-12 bg-dark">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Title & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-[40px] font-black text-textPrimary mb-4 font-serif tracking-tight">Contact Me</h2>
          <p className="text-textSecondary mb-6 max-w-2xl mx-auto text-[15px] font-medium leading-relaxed">
            Let's connect and discuss opportunities, collaborations, or just have a conversation about technology
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 pl-0 lg:pl-10">
          
          {/* Left side info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[22px] font-bold text-textPrimary mb-4 font-serif">Get In Touch</h3>
              <p className="text-textSecondary text-[14px] leading-relaxed mb-10 max-w-[420px]">
                I'm always open to discussing new opportunities, data engineering projects, or just connecting with fellow engineers and data professionals. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="flex flex-col gap-7">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0 mt-0.5 shadow-sm">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="text-textPrimary font-bold text-[13px] mb-1">Email</h4>
                  <p className="text-textSecondary text-[13px]">tanveerkakar294@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0 mt-0.5 shadow-sm">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-textPrimary font-bold text-[13px] mb-1">Phone</h4>
                  <p className="text-textSecondary text-[13px]">+91-8149853942</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0 mt-0.5 shadow-sm">
                  <FaLinkedin size={16} />
                </div>
                <div>
                  <h4 className="text-textPrimary font-bold text-[13px] mb-1">LinkedIn</h4>
                  <a href="https://linkedin.com/in/tanveer-kakar" className="text-textSecondary text-[13px] hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">linkedin.com/in/tanveer-kakar</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0 mt-0.5 shadow-sm">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-textPrimary font-bold text-[13px] mb-1">Location</h4>
                  <p className="text-textSecondary text-[13px]">Pune, Maharashtra, India</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0 mt-0.5 shadow-sm">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-textPrimary font-bold text-[13px] mb-1">Availability</h4>
                  <p className="text-textSecondary text-[13px]">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-textPrimary/5 rounded-[12px] p-8 lg:p-10 shadow-2xl relative"
          >
            <h3 className="text-[20px] font-bold text-textPrimary mb-8 font-serif tracking-wide">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-textPrimary text-[11px] font-bold tracking-wide">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-dark/50 border border-textPrimary/10 rounded-xl px-4 py-3.5 text-[13px] text-textPrimary focus:outline-none focus:border-primary transition-colors placeholder:text-textSecondary/50 shadow-inner"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-textPrimary text-[11px] font-bold tracking-wide">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-dark/50 border border-textPrimary/10 rounded-xl px-4 py-3.5 text-[13px] text-textPrimary focus:outline-none focus:border-primary transition-colors placeholder:text-textSecondary/50 shadow-inner"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-textPrimary text-[11px] font-bold tracking-wide">Message *</label>
                <textarea 
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  rows="4"
                  className="bg-dark/50 border border-textPrimary/10 rounded-xl px-4 py-3.5 text-[13px] text-textPrimary focus:outline-none focus:border-primary transition-colors placeholder:text-textSecondary/50 resize-none shadow-inner"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
                <div className="text-right text-textSecondary text-[10px] mt-1 font-medium">
                  {formData.message.length}/1000
                </div>
              </div>



              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-2 w-full py-3.5 rounded-full bg-primary hover:bg-secondary text-[#050505] font-bold text-[14px] transition-all flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(0,208,156,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-[#050505] border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>

              <div className="mt-6 pt-5 border-t border-textPrimary/5 text-center px-4">
                <p className="text-textSecondary/70 text-[10px] leading-relaxed font-medium">
                  By sending a message, you agree to be contacted regarding your inquiry. Your information will be kept confidential.
                </p>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>

      {/* Toast Notification */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-dark/95 border border-textPrimary/10 border-l-4 border-l-primary shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-xl p-5 flex items-center gap-4 backdrop-blur-md"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 relative">
              <div className="absolute inset-0 rounded-full animate-ping bg-primary/20"></div>
              <Send size={16} />
            </div>
            <div className="pr-4">
              <h4 className="text-textPrimary font-bold text-sm mb-1 tracking-wide">Message Sent!</h4>
              <p className="text-textSecondary text-[12px]">Thanks for reaching out. I'll get back to you shortly.</p>
            </div>
          </motion.div>
        )}
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-dark/95 border border-textPrimary/10 border-l-4 border-l-red-500 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-xl p-5 flex items-center gap-4 backdrop-blur-md"
          >
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
              <Send size={16} />
            </div>
            <div className="pr-4">
              <h4 className="text-textPrimary font-bold text-sm mb-1 tracking-wide">Failed to Send</h4>
              <p className="text-textSecondary text-[12px]">Something went wrong. Please try again.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
