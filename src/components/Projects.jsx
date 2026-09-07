import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, X, ClipboardCheck, LineChart, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 0,
    title: "GoodCabs Transportation Data Engineering Pipeline",
    modalTitle: "Transportation / Data Pipeline",
    subtitle: "End-to-end transportation data pipeline built on Databricks using Medallion Architecture",
    description: "Built an end-to-end transportation data engineering pipeline on Databricks to transform raw trip data into analytics-ready datasets. Implements Medallion Architecture (Bronze → Silver → Gold) using PySpark, AWS S3, Delta Lake, and Unity Catalog. Produces city-level fact tables and supports BI reporting and dashboards.",
    image: "/project_goodcabs.jpg",
    icon: LineChart,
    features: [
      "Ingested raw transportation data from AWS S3 into the Bronze layer using PySpark",
      "Cleaned, validated, and standardized data in the Silver layer including null handling, deduplication, and type conversion",
      "Built Gold layer with fact_trips and 10 city-level analytical tables for granular reporting",
      "Implemented Medallion Architecture (Bronze → Silver → Gold) on Databricks Lakehouse",
      "Used Delta Lake and Unity Catalog for reliable storage and data governance",
      "Tracked dataset dependencies using Databricks Data Lineage"
    ],
    tech: ["Python", "PySpark", "Apache Spark", "SQL", "Databricks", "AWS S3", "Delta Lake", "Unity Catalog"],
    demoLink: "https://github.com/tanveer-kakar/DE-Transportation-GoodCabs",
    githubLink: "https://github.com/tanveer-kakar/DE-Transportation-GoodCabs",
  },
  {
    id: 1,
    title: "Healthcare Data Engineering Pipeline",
    modalTitle: "Healthcare / Data Pipeline",
    subtitle: "End-to-end healthcare data pipeline using PySpark, Databricks, and Delta Lake",
    description: "Built an end-to-end healthcare data pipeline using PySpark, Databricks, and Delta Lake to process patient, hospital, appointment, and billing data. Designed Bronze, Silver, and Gold layers with fact and dimension tables and developed SQL analytics for department performance, appointments, patients, and revenue.",
    image: "/project_healthcare.jpg",
    icon: ClipboardCheck,
    features: [
      "Built an end-to-end healthcare data pipeline using PySpark, Databricks, and Delta Lake",
      "Processed patient, hospital, appointment, and billing data at scale",
      "Designed Bronze, Silver, and Gold layers with fact and dimension tables",
      "Developed SQL analytics for department performance, appointments, patients, and revenue"
    ],
    tech: ["Python", "SQL", "PySpark", "Databricks", "Delta Lake"],
    demoLink: "https://github.com/Tanveer2507",
    githubLink: "https://github.com/Tanveer2507",
  },

  {
    id: 2,
    title: "Data Quality & Validation Framework",
    modalTitle: "Data Quality / Validation",
    subtitle: "Automated framework for dataset accuracy and consistency checks",
    description: "Developed a reusable data quality and validation framework using Python and SQL to enforce schema checks, null handling, duplicate detection, and business rule validation across datasets. Integrated with data pipelines for automated pre- and post-load validation.",
    image: "/project_dataquality.jpg",
    icon: ClipboardCheck,
    features: [
      "Schema and data type validation for incoming datasets",
      "Null, duplicate, and outlier detection with configurable thresholds",
      "Business rule enforcement and constraint validation",
      "Automated reporting of data quality metrics and failure summaries",
      "Seamlessly integrated with existing ETL pipeline workflows"
    ],
    tech: ["Python", "SQL", "Pandas", "NumPy", "PySpark"],
    demoLink: "https://github.com/Tanveer2507",
    githubLink: "https://github.com/Tanveer2507",
  },
  {
    id: 3,
    title: "Large-Scale Data Processing with PySpark",
    modalTitle: "Big Data / PySpark",
    subtitle: "Distributed data processing and analytics using Apache Spark",
    description: "Implemented large-scale data processing workflows using PySpark and Apache Spark to handle multi-million row datasets. Performed complex joins, aggregations, and transformations while optimizing Spark jobs for performance and cost efficiency.",
    image: "/project_pyspark.jpg",
    icon: LineChart,
    features: [
      "Distributed processing of large datasets using Apache Spark",
      "Complex multi-table joins, window functions, and aggregations in PySpark",
      "Spark job tuning and optimization for improved performance",
      "Data partitioning and caching strategies for efficient processing",
      "Integration with SQL databases for post-processing data loading"
    ],
    tech: ["Python", "PySpark", "Apache Spark", "SQL", "Big Data"],
    demoLink: "https://github.com/Tanveer2507",
    githubLink: "https://github.com/Tanveer2507",
  },
  {
    id: 4,
    title: "Data Analysis Dashboard",
    modalTitle: "Analytics / Dashboard",
    subtitle: "Interactive dashboard for data exploration and business reporting",
    description: "Built an interactive data analysis dashboard to visualize key metrics, trends, and KPIs from processed datasets. Automated data preprocessing and cleaning pipelines feed the dashboard with fresh, reliable data for business decision-making.",
    image: "/project_dashboard.jpg",
    icon: LineChart,
    features: [
      "Interactive visualizations to track key metrics and trends",
      "Automated data preprocessing and cleaning pipelines",
      "Comprehensive reporting and statistical analysis modules",
      "Connected to SQL databases for real-time data refresh",
      "User-friendly interface for data exploration by non-technical stakeholders"
    ],
    tech: ["Python", "SQL", "Pandas", "Matplotlib", "Seaborn"],
    demoLink: "https://github.com/Tanveer2507/Data-Analysis-Dashboard",
    githubLink: "https://github.com/Tanveer2507/Data-Analysis-Dashboard",
  }
];

const Projects = ({ viewState = 'home', onViewChange }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const displayedProjects = viewState === 'home' ? projects.slice(0, 2) : projects;

  return (
    <section id="projects" className="py-4 px-4 md:px-12 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4 font-serif tracking-tight">Featured Projects</h2>
          <p className="text-textSecondary mb-6 max-w-2xl mx-auto text-[15px] font-medium">
            A showcase of my work in building data pipelines, ETL workflows, and large-scale data processing solutions
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {viewState !== 'home' && (
          <div className="mb-8 font-sans">
            <button 
              onClick={() => {
                if (onViewChange) onViewChange('home');
                setTimeout(() => {
                  const pSection = document.getElementById('projects');
                  if (pSection) window.scrollTo({ top: pSection.offsetTop - 100, behavior: 'smooth' });
                }, 50);
              }}
              className="flex items-center gap-2 text-primary hover:text-[#050505] transition-colors font-bold uppercase tracking-wide text-xs bg-primary/10 border border-primary/20 hover:bg-primary px-4 py-2 rounded-lg w-max shadow-md"
            >
              <ArrowLeft size={16} strokeWidth={2.5} /> Back to Home
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id ?? index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-textPrimary/5 rounded-[12px] overflow-hidden group flex flex-col hover:border-primary/20 transition-all shadow-lg"
            >
              <div className="relative overflow-hidden h-64 aspect-video bg-[#111]">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/800x450/0f172a/00d09c?text=Project";
                  }}
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-[22px] font-bold text-textPrimary mb-3">{project.title}</h3>
                <p className="text-textSecondary/90 mb-6 flex-1 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] px-3 py-1 bg-primary/10 text-primary rounded-full font-bold">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-textPrimary/5">
                  <div className="flex items-center gap-4">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-textPrimary hover:text-primary transition-colors text-sm font-medium">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-textSecondary hover:text-textPrimary transition-colors text-sm font-medium">
                      <FaGithub size={16} /> Code
                    </a>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-primary hover:brightness-125 font-bold text-[13px] tracking-wide transition-all uppercase"
                  >
                    <Eye size={16} strokeWidth={2.5} /> View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {viewState === 'home' && projects.length > 2 && (
          <div className="mt-14 flex justify-center">
            <button 
              onClick={() => {
                if (onViewChange) onViewChange('all_projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-[#050505] px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.15)] flex items-center justify-center"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
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
              <div className="flex items-center justify-between p-5 pb-4">
                 <h2 className="text-xl font-serif font-bold tracking-wide flex gap-2">
                    <span className="text-textPrimary">{selectedProject.modalTitle.split('/')[0]} /</span> 
                    <span className="text-primary">{selectedProject.modalTitle.split('/')[1] || "Project"}</span>
                 </h2>
                 <button 
                   onClick={() => setSelectedProject(null)}
                   className="text-textSecondary hover:text-textPrimary p-1 border border-textPrimary/10 rounded-md hover:bg-textPrimary/5 transition-colors"
                 >
                   <X size={16} />
                 </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto px-5 pb-8 custom-scrollbar">
                
                {/* Big Blue Header Card */}
                {(() => {
                  const IconComponent = selectedProject.icon || ClipboardCheck;
                  return (
                    <div className="bg-gradient-to-br from-[#1b84d1] to-[#156cac] rounded-xl p-6 flex items-center gap-5 text-white mb-8 shadow-inner shadow-blue-400/20">
                      <div className="shrink-0 flex items-center justify-center">
                        <IconComponent size={60} strokeWidth={1.5} className="text-white drop-shadow-md" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold mb-1 drop-shadow-sm">{selectedProject.title.split(' ')[0]}</h3>
                        <p className="text-sm text-blue-50 leading-snug drop-shadow-sm">
                          {selectedProject.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-primary font-bold text-[15px] mb-2 tracking-wide font-sans">Description</h4>
                  <p className="text-textSecondary/90 text-[13px] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-primary font-bold text-[15px] mb-3 tracking-wide font-sans">Key Features</h4>
                  <ul className="space-y-2.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-textSecondary/90 text-[13px] leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 shadow-[0_0_5px_rgba(0,208,156,0.5)]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-primary font-bold text-[15px] mb-3 tracking-wide font-sans">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-primary font-bold text-[#050505] text-[11px] rounded-full shadow-md">
                        {tech}
                      </span>
                    ))}
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

export default Projects;
