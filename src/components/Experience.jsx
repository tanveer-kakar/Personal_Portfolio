import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Data Engineer",
    isCurrent: false,
    company: "Marca Solutions",
    duration: "June 2025 - July 2026",
    location: "Pune, Maharashtra",
    description: [
      "Developed and maintained ETL/data pipelines for data ingestion, transformation, and processing.",
      "Used Python, SQL, PySpark, and Apache Spark for data extraction, cleansing, transformation, and analysis.",
      "Built and optimized data processing workflows to improve pipeline performance and reliability.",
      "Implemented data validation and quality checks to ensure accuracy and consistency of datasets.",
      "Worked with large datasets and performed joins, aggregations, filtering, and transformations using PySpark.",
      "Optimized SQL queries and data-processing logic for efficient data retrieval and processing.",
      "Monitored data pipelines and troubleshot data-processing failures and data-quality issues.",
      "Collaborated with team members to understand data requirements and deliver reliable data solutions."
    ],
    tech: ["Python", "SQL", "PySpark", "Apache Spark", "ETL"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-4 px-4 md:px-12 bg-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Experience</h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-[15px] font-medium leading-relaxed mb-6">
            My professional journey in data engineering, ETL pipelines, and large-scale data processing
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-textPrimary/5 shadow-md p-6 md:p-8 flex items-start gap-6 hover:border-primary/30 transition-colors rounded-[12px] group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 hidden sm:flex group-hover:scale-110 transition-transform">
                <Briefcase size={28} />
              </div>

              {/* Content */}
              <div className="w-full">
                {/* Role + Duration badge */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-2">
                  <h3 className="text-[20px] font-bold text-textPrimary font-serif">{exp.role}</h3>
                  <span className="text-[#050505] font-bold px-3.5 py-1 bg-primary rounded-full text-[12px] shrink-0 w-max tracking-wide shadow-sm">{exp.duration}</span>
                </div>

                {/* Company + Location */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <h4 className="text-textSecondary text-[15px] tracking-wide leading-relaxed">{exp.company}</h4>
                  <div className="flex items-center gap-1.5 text-textSecondary text-[13px] font-medium">
                    <MapPin size={14} className="text-primary" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description bullets */}
                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-textSecondary text-[13px] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Footer: tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-textPrimary/5">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-primary/10 text-textSecondary text-[11px] font-semibold tracking-wide rounded-full border border-textPrimary/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
