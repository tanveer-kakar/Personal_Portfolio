import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";

const PrivacyPolicy = ({ onViewChange }) => {
  const handleBack = () => {
    if (onViewChange) onViewChange("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="pt-28 pb-16 px-4 md:px-12 min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-primary hover:text-[#050505] transition-colors font-bold uppercase tracking-wide text-xs bg-primary/10 border border-primary/20 hover:bg-primary px-4 py-2 rounded-lg w-max shadow-md"
          >
            <ArrowLeft size={16} strokeWidth={2.5} /> Back to Home
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Shield size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-textPrimary mb-3 font-serif tracking-tight">Privacy Policy</h1>
          <p className="text-textSecondary text-sm">Last updated: August 2026</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8 text-textSecondary text-[14px] leading-relaxed"
        >
          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              1. Introduction
            </h2>
            <p>
              Welcome to Tanveer Kakar's personal portfolio website. This Privacy Policy explains how information is collected, used, and protected when you visit this site. This portfolio is a personal website created to showcase professional skills, experience, and projects as a Data Engineer.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              2. Information We Collect
            </h2>
            <p className="mb-3">When you use the contact form on this website, you voluntarily provide:</p>
            <ul className="space-y-2">
              {["Your full name", "Your email address", "The message content you submit"].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              No other personal data is collected automatically. This website does not use cookies, tracking pixels, or analytics tools that collect personally identifiable information.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              3. How We Use Your Information
            </h2>
            <p className="mb-3">Information submitted through the contact form is used solely to:</p>
            <ul className="space-y-2">
              {[
                "Respond to your inquiry or message",
                "Discuss potential collaboration or job opportunities",
                "Follow up on questions related to projects or skills",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">Your information will never be sold, rented, or shared with third parties for marketing purposes.</p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              4. Third-Party Services
            </h2>
            <p>
              This website uses <span className="text-primary font-semibold">Web3Forms</span> to process contact form submissions. When you submit the form, your data is handled according to Web3Forms' own privacy policy. No data is stored on this website's own servers.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              5. External Links
            </h2>
            <p>
              This portfolio contains links to external platforms such as GitHub, LinkedIn, and project demo URLs. These sites operate under their own privacy policies and this site bears no responsibility for their content or data practices.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              6. Data Security
            </h2>
            <p>
              While no method of transmission over the internet is 100% secure, reasonable precautions are taken to protect any information submitted through this site. The contact form is served over HTTPS to ensure encrypted communication.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              7. Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="space-y-2">
              {[
                "Request deletion of any personal information you submitted",
                "Ask what data has been received from you",
                "Withdraw consent for further communication at any time",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:tanveerkakar294@gmail.com" className="text-primary hover:underline font-medium">
                tanveerkakar294@gmail.com
              </a>.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              8. Changes to This Policy
            </h2>
            <p>
              This Privacy Policy may be updated occasionally. Any changes will be reflected on this page with an updated date. Continued use of the website after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              9. Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, reach out at{" "}
              <a href="mailto:tanveerkakar294@gmail.com" className="text-primary hover:underline font-medium">
                tanveerkakar294@gmail.com
              </a>{" "}
              or call <span className="text-primary font-medium">+91-8149853942</span>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
