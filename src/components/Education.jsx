import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";

const educationDetails = [
  {
    id: 1,
    degree: "B.Sc. in Information Technology",
    institution: "Kavayitri Bahinabai Chaudhari North Maharashtra University",
    timeline: "June 2022 – June 2025",
    location: "Jalgaon, Maharashtra",
    percentage: "77.61%"
  },
  {
    id: 2,
    degree: "HSC (Maharashtra State Board - Aurangabad)",
    institution: "Ekta Junior College, Anwa Bhokardan, Jalna",
    timeline: "June 2020 – March 2022",
    location: "Aurangabad, Maharashtra",
    percentage: "79.17%"
  },
  {
    id: 3,
    degree: "SSC (Maharashtra State Board - Nashik)",
    institution: "Anglo Urdu High School, Pachora, Jalgaon",
    timeline: "June 2019 – March 2020",
    location: "Jalgaon, Maharashtra",
    percentage: "85.00%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-4 px-4 md:px-12 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4 font-serif tracking-tight">Educational Qualifications</h2>
          <p className="text-textSecondary mb-6 max-w-2xl mx-auto text-[15px] font-medium">
            My academic journey that laid the foundation for my career in data engineering and technology
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-textPrimary/5 shadow-md p-6 md:p-8 flex items-start gap-6 hover:border-primary/30 transition-colors rounded-[12px] group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 hidden sm:flex group-hover:scale-110 transition-transform">
                <GraduationCap size={28} />
              </div>
              <div className="w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-2">
                  <h3 className="text-[20px] font-bold text-textPrimary font-serif">{edu.degree}</h3>
                  <span className="text-[#050505] font-bold px-3.5 py-1 bg-primary rounded-full text-[12px] shrink-0 w-max tracking-wide shadow-sm">{edu.timeline}</span>
                </div>
                <h4 className="text-textSecondary text-[15px] mb-5 tracking-wide max-w-xl leading-relaxed">{edu.institution}</h4>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 border-t border-textPrimary/5">
                  <div className="flex items-center gap-2 text-textSecondary text-[13px] font-medium">
                    <MapPin size={15} className="text-primary" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-2 text-textSecondary text-[13px] font-medium">
                    <Award size={15} className="text-primary" />
                    Percentage: <span className="text-textPrimary font-bold text-[14px]">{edu.percentage}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
