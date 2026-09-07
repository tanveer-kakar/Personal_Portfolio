import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ExternalLink, X, Eye, ArrowLeft } from "lucide-react";

const certificationData = [
  {
    id: 8,
    title: "Exam Prep Plan Overview: AWS Certified Data Engineer - Associate (DEA-C01)",
    issuer: "AWS Training & Certification",
    date: "August 29, 2026",
    tag: "2026",
    description: "Completed the AWS Certified Data Engineer - Associate Exam Prep Plan, covering core data engineering concepts on AWS including data ingestion, transformation, orchestration, storage, and security using AWS-native services.",
    image: "/AWS Certified Data Engineer - Associate.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Data Analytics Course",
    issuer: "PySpiders",
    date: "Dec 01, 2025",
    tag: "2025",
    description: "Successfully completed an intensive Data Analytics course covering Python, SQL, NumPy, Pandas, Matplotlib, Seaborn, and Power BI. Certificate No: PYDA-25-535.",
    image: "/cert-pyspiders.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Introduction to Entity Relationship ER Modeling",
    issuer: "Infosys Springboard",
    date: "June 15, 2025",
    tag: "2025",
    description: "Successfully completed the course on Entity Relationship (ER) Modeling, mastering concepts of database design, entity mapping, and relationship schemas.",
    image: "/cert-infosys.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Advanced Data Visualization",
    issuer: "Infosys Springboard",
    date: "August 15, 2024",
    tag: "2024",
    description: "Successfully completed the Advanced Data Visualization course, mastering tools and techniques to create compelling visual narratives and interactive dashboards.",
    image: "/cert-infosys.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "Python for Data Science",
    issuer: "Infosys Springboard",
    date: "March 10, 2024",
    tag: "2024",
    description: "Gained expertise in Python programming for data science applications, including data manipulation, statistical analysis, and implementing machine learning algorithms.",
    image: "/cert-infosys.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "Advanced SQL Database Management",
    issuer: "Infosys Springboard",
    date: "October 05, 2023",
    tag: "2023",
    description: "Developed advanced SQL querying skills, covering complex joins, subqueries, database optimization, and efficient data retrieval strategies for relational databases.",
    image: "/cert-infosys.jpg",
    link: "#"
  },
  {
    id: 7,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "April 22, 2026",
    tag: "2026",
    description: "Successfully completed the AWS Cloud Practitioner Essentials course, gaining a fundamental understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
    image: "/aws-cloud-practitioner.jpg",
    link: "#"
  }
];


const CardItem = ({ item, isAward, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card flex flex-col overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-textPrimary/10 hover:border-primary/50"
  >
    {/* Image container w/ Tag */}
    <div className="relative bg-white aspect-[4/3] p-4 flex items-center justify-center border-b border-textPrimary/10 overflow-hidden">
      <div className="absolute top-4 right-4 bg-primary text-[#050505] text-[10px] font-black tracking-wider px-3 py-1.5 rounded-full z-50 shadow-md transition-all duration-300">
        {item.tag.toUpperCase()}
      </div>
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        {item.image && item.image.endsWith('.pdf') ? (
          <iframe
            src={item.image}
            title={item.title}
            className="w-full h-full absolute inset-0 z-10 pointer-events-none"
            style={{ border: 'none' }}
          />
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover absolute inset-0 z-10"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        )}
        <span className="text-gray-400 font-medium text-sm">Certificate Image</span>
      </div>
    </div>

    {/* Content Container */}
    <div className="p-6 flex flex-col flex-grow bg-card">
      <h3 className="text-lg font-bold text-textPrimary mb-2 leading-snug">{item.title}</h3>
      <p className="text-primary font-bold text-xs mb-4">{item.issuer}</p>
      <p className="text-textSecondary/90 text-sm mb-6 flex-grow leading-relaxed">
        {item.description}
      </p>

      {/* Footer */}
      <div className="pt-4 flex items-center justify-between text-[11px] font-bold tracking-wide">
        <div className="flex items-center gap-1.5 text-textSecondary">
          <Calendar size={14} />
          <span>Date: {item.date}</span>
        </div>
        <button onClick={() => onSelect(item)} className="flex items-center gap-1.5 text-primary hover:brightness-125 font-bold tracking-wide transition-all uppercase">
          <span>{isAward ? 'VIEW AWARD' : 'VIEW'}</span>
          <Eye size={14} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  </motion.div>
);

const Certifications = ({ viewState = 'home', onViewChange }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const displayedCerts = viewState === 'home' ? certificationData.slice(0, 3) : certificationData;

  return (
    <section id="certifications" className="py-4 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-textPrimary mb-4 font-serif tracking-tight">Certifications</h2>
          <p className="text-textSecondary mb-6 max-w-2xl mx-auto text-[15px]">
            Professional certifications highlighting expertise in data engineering, big data, and cloud technologies
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {viewState !== 'home' && (
          <div className="mb-8 font-sans">
            <button 
              onClick={() => {
                if (onViewChange) onViewChange('home');
                setTimeout(() => {
                  const s = document.getElementById('certifications');
                  if (s) window.scrollTo({ top: s.offsetTop - 100, behavior: 'smooth' });
                }, 50);
              }}
              className="flex items-center gap-2 text-primary hover:text-[#050505] transition-colors font-bold uppercase tracking-wide text-xs bg-primary/10 border border-primary/20 hover:bg-primary px-4 py-2 rounded-lg w-max shadow-md"
            >
              <ArrowLeft size={16} strokeWidth={2.5} /> Back to Home
            </button>
          </div>
        )}

        {/* Certifications Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Award size={18} />
            </div>
            <h3 className="text-2xl font-bold text-textPrimary font-serif tracking-wide">Professional Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCerts.map((cert) => (
              <CardItem key={cert.id} item={cert} isAward={false} onSelect={setSelectedItem} />
            ))}
          </div>

          {viewState === 'home' && certificationData.length > 3 && (
            <div className="mt-14 flex justify-center">
              <button 
                onClick={() => {
                  if (onViewChange) onViewChange('all_certificates');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-[#050505] px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.15)] flex items-center justify-center"
              >
                Show All Certificates
              </button>
            </div>
          )}
        </div>


      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card border border-textPrimary/10 rounded-xl w-full max-w-[500px] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Title with X button */}
              <div className="flex items-center justify-between p-5 pb-4 border-b border-textPrimary/10 gap-4">
                <h2 className="text-xl font-serif font-bold tracking-wide flex-1 min-w-0">
                  <span className="text-primary truncate block">{selectedItem.title}</span>
                </h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-textSecondary hover:text-textPrimary p-1 border border-textPrimary/10 rounded-md hover:bg-textPrimary/5 transition-colors shrink-0 outline-none focus:ring-1 focus:ring-primary/50"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 custom-scrollbar flex-grow">
                {/* Image */}
                <div className="w-full bg-white rounded-xl mb-6 flex items-center justify-center p-4 border border-textPrimary/5">
                  {selectedItem.image && selectedItem.image.endsWith('.pdf') ? (
                    <div className="relative w-full h-[40vh] rounded-md overflow-hidden group">
                      <iframe
                        src={selectedItem.image}
                        title={selectedItem.title}
                        className="w-full h-full"
                        style={{ border: 'none' }}
                      />
                      <a
                        href={selectedItem.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/10 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        title="Open PDF"
                      >
                        <ExternalLink size={32} className="text-primary drop-shadow-md" />
                      </a>
                    </div>
                  ) : (
                    <a 
                      href={selectedItem.image} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center overflow-hidden rounded-md h-[30vh] w-full cursor-pointer group"
                      title="Click to view full certificate"
                    >
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="w-full h-full object-contain absolute inset-0 z-10 group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <span className="text-gray-400 font-medium text-sm">Certificate Image</span>
                      
                      {/* Hover Overlay Icon */}
                      <div className="absolute inset-0 bg-black/10 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <ExternalLink size={32} className="text-primary drop-shadow-md" />
                      </div>
                    </a>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-bold text-[13px] uppercase tracking-wider mb-1">Issuer</h4>
                    <p className="text-textPrimary font-medium text-base">{selectedItem.issuer}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-[13px] uppercase tracking-wider mb-1">Date</h4>
                    <p className="text-textPrimary font-medium text-base">{selectedItem.date}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-[13px] uppercase tracking-wider mb-2">Description</h4>
                    <p className="text-textSecondary/90 text-[14px] leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
