import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";

const TermsOfService = ({ onViewChange }) => {
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
            <FileText size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-textPrimary mb-3 font-serif tracking-tight">Terms of Service</h1>
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this personal portfolio website of Tanveer Kakar (Data Engineer), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not continue to use this website.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              2. Purpose of This Website
            </h2>
            <p className="mb-3">This website is a personal portfolio built to:</p>
            <ul className="space-y-2">
              {[
                "Showcase professional skills, experience, and projects in Data Engineering",
                "Provide information about Tanveer Kakar's educational background and certifications",
                "Enable potential employers and collaborators to make contact",
                "Present data engineering work including ETL pipelines, PySpark projects, and SQL workflows",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              3. Intellectual Property
            </h2>
            <p>
              All content on this website — including but not limited to text, design, layout, graphics, project descriptions, and code snippets — is the intellectual property of Tanveer Kakar unless otherwise stated. You may not reproduce, distribute, or use any content from this site without prior written permission.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              4. Permitted Use
            </h2>
            <p className="mb-3">You are permitted to:</p>
            <ul className="space-y-2 mb-3">
              {[
                "Browse and view the portfolio for personal or professional evaluation",
                "Share the website URL with others",
                "Contact through the provided form for legitimate professional inquiries",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-3">You are not permitted to:</p>
            <ul className="space-y-2">
              {[
                "Copy, replicate, or plagiarize any part of this website's content or design",
                "Use this site for any unlawful, harmful, or fraudulent purpose",
                "Attempt to gain unauthorized access to any part of the site",
                "Submit false, misleading, or spam messages through the contact form",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              5. Project & Work Showcase
            </h2>
            <p>
              The projects displayed on this website represent personal and professional work undertaken by Tanveer Kakar. Any tools, technologies, or frameworks mentioned (such as Python, PySpark, Apache Spark, SQL) are used descriptively and belong to their respective owners. Project descriptions are provided for informational purposes only.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              6. Disclaimer of Warranties
            </h2>
            <p>
              This website is provided on an "as is" basis without any warranties, express or implied. While every effort is made to keep content accurate and up to date, no guarantee is made regarding the completeness, accuracy, or reliability of any information presented. The site may be updated or modified at any time without prior notice.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              7. Limitation of Liability
            </h2>
            <p>
              Tanveer Kakar shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its content. This includes any damages resulting from errors, omissions, or interruptions in service.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              8. Third-Party Links
            </h2>
            <p>
              This website contains links to external platforms including GitHub, LinkedIn, and project demos. These links are provided for convenience only. Tanveer Kakar is not responsible for the content, privacy practices, or terms of any third-party websites accessed through these links.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              9. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Maharashtra, India.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              10. Changes to Terms
            </h2>
            <p>
              These Terms of Service may be revised at any time. Updated terms will be posted on this page with a revised date. Continued use of the website after changes are published constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="bg-card border border-textPrimary/5 rounded-[12px] p-6 md:p-8">
            <h2 className="text-lg font-bold text-textPrimary mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-primary block"></span>
              11. Contact
            </h2>
            <p>
              For any questions regarding these Terms of Service, please reach out at{" "}
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

export default TermsOfService;
