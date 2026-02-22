import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Calendar,
  Database,
  Layout,
  Code2,
  Cloud,
  Settings,
  Award,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  Terminal,
  Cpu,
  Workflow,
  BarChart3,
  Globe,
  Github
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "DAX", "M"], icon: <Code2 size={18} />, color: "text-emerald-500" },
    { category: "Databases", items: ["Snowflake", "PostgreSQL", "MySQL"], icon: <Database size={18} />, color: "text-blue-500" },
    { category: "Cloud", items: ["Azure", "AWS", "ADF"], icon: <Cloud size={18} />, color: "text-sky-500" },
    { category: "DevOps", items: ["Docker", "Jenkins", "GitLab"], icon: <Settings size={18} />, color: "text-orange-500" },
    { category: "Data", items: ["PySpark", "Databricks", "Airflow"], icon: <Workflow size={18} />, color: "text-purple-500" },
    { category: "BI", items: ["Power BI", "DAX", "Semantic Models"], icon: <BarChart3 size={18} />, color: "text-yellow-500" },
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "CoolSys/Starbucks",
      period: "2023 — Present",
      location: "Arizona, USA",
      description: "Leading Azure-based data integration workflows and ETL pipelines for enterprise analytics.",
      highlights: [
        "Optimized SQL queries improving API performance by 50%+",
        "Built Power BI semantic models with advanced DAX",
        "Integrated FastAPI REST services with Azure data platforms"
      ]
    },
    {
      role: "Data Engineer",
      company: "JPMC",
      period: "2019 — 2022",
      location: "Texas, USA",
      description: "Architected secure, scalable data pipelines using Python and Snowflake for high-volume payments.",
      highlights: [
        "Developed analytics-ready Snowflake schemas (Fact/Dim)",
        "Implemented PySpark transformations in Databricks",
        "Built FastAPI backend services for real-time profiling"
      ]
    },
    {
      role: "Data Engineer",
      company: "Jeevan Scientific",
      period: "2018 — 2019",
      location: "India",
      description: "Managed healthcare data processing and ETL pipelines for clinical trial analytics.",
      highlights: [
        "Built ETL pipelines for clinical and healthcare datasets",
        "Implemented data validation and reconciliation checks",
        "Developed SQL-based transformation logic"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-grid selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 glass" : "py-8 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: -0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">R</div>
            <span className="font-bold text-xl tracking-tight">Rani B.</span>
          </motion.div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors"
          >
            Download CV
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-bold text-emerald-600 tracking-widest uppercase">Available for new opportunities</span>
            </div>
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.9] mb-8">
              Engineering <br />
              <span className="text-emerald-500">Data</span> at Scale.
            </h1>
            <p className="text-xl text-zinc-500 leading-relaxed max-w-lg mb-10">
              Software & Data Engineer with 6+ years of experience building scalable platforms across Azure, AWS, and Snowflake.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:ranibalina1@gmail.com" className="flex items-center gap-3 bg-white border border-zinc-200 px-6 py-4 rounded-2xl font-bold hover:border-emerald-500 transition-all group">
                <Mail size={20} className="text-zinc-400 group-hover:text-emerald-500" />
                Get in touch
                <ArrowUpRight size={18} className="text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <div className="flex gap-2">
                <a href="http://www.linkedin.com/in/rani5788" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-zinc-200 hover:border-emerald-500 transition-all text-zinc-400 hover:text-emerald-500">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-zinc-200 hover:border-emerald-500 transition-all text-zinc-400 hover:text-emerald-500">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-zinc-900 p-8 flex flex-col justify-between shadow-2xl shadow-emerald-500/20 animate-float">
              <div className="flex justify-between items-start">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <Terminal size={24} className="text-zinc-700" />
              </div>
              <div className="font-mono text-sm space-y-2">
                <p className="text-emerald-400">$ rani.init()</p>
                <p className="text-zinc-500">{">"} Loading core modules...</p>
                <p className="text-zinc-500">{">"} Azure Data Factory [OK]</p>
                <p className="text-zinc-500">{">"} Snowflake Warehouse [OK]</p>
                <p className="text-zinc-500">{">"} PySpark Engine [OK]</p>
                <p className="text-emerald-400">$ rani.status</p>
                <p className="text-white">"Ready to build high-performance data systems."</p>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-zinc-600 text-xs font-mono">v2.0.26</div>
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 border-4 border-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">AZ</div>
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-4 border-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">SF</div>
                  <div className="w-10 h-10 rounded-full bg-orange-500 border-4 border-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">AWS</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Skills Bento Grid */}
      <section id="skills" className="py-20 px-8 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="section-label">Expertise</span>
            <h2 className="text-4xl font-bold tracking-tight">Technical Arsenal</h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bento-card group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 ${skill.color} group-hover:bg-white group-hover:scale-110 transition-all duration-500`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="px-3 py-1 bg-zinc-50 text-zinc-600 rounded-lg text-xs font-medium border border-zinc-100 group-hover:bg-white transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="section-label">Journey</span>
            <h2 className="text-4xl font-bold tracking-tight">Professional Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                className="group relative bg-white border border-zinc-200 rounded-[2.5rem] p-10 hover:border-emerald-200 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-emerald-500">{exp.period}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300" />
                      <span className="text-sm text-zinc-400">{exp.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-1">{exp.role}</h3>
                    <p className="text-lg text-zinc-500 font-medium">{exp.company}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-zinc-600 mb-8 text-lg leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.highlights.map((h, j) => (
                        <div key={j} className="flex gap-3 text-sm text-zinc-500">
                          <ChevronRight size={18} className="text-emerald-500 shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={24} className="text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-20 px-8 bg-zinc-900 text-white rounded-[4rem] mx-4 mb-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-4 block">Credentials</span>
            <h2 className="text-4xl font-bold mb-12">Certifications</h2>
            <div className="space-y-4">
              {[
                "Fabric Data Engineering Associate",
                "Power BI Data Analyst Associate",
                "Snowpro Core Certification",
                "Matillion ETL Specialist"
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Award size={20} />
                    </div>
                    <span className="font-medium">{cert}</span>
                  </div>
                  <ExternalLink size={16} className="text-white/20" />
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-4 block">Academic</span>
            <h2 className="text-4xl font-bold mb-12">Education</h2>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">MS in Information Systems</h3>
                  <p className="text-white/50">Wilmington University, DE</p>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed">
                Specialized in Data Engineering and Enterprise Systems. Graduated with honors, focusing on scalable cloud architectures and real-time data processing.
              </p>
              <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm font-bold text-emerald-400">2022 — 2023</span>
                <span className="text-xs text-white/30 uppercase tracking-widest">Delaware, USA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">
            Let's build something <span className="text-emerald-500 italic">extraordinary</span>.
          </h2>
          <p className="text-xl text-zinc-500 mb-12">
            Currently open to new opportunities and interesting projects.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:ranibalina1@gmail.com" className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all hover:shadow-xl hover:shadow-emerald-500/20">
              Send an email
            </a>
            <a href="http://www.linkedin.com/in/rani5788" target="_blank" rel="noopener noreferrer" className="bg-white border border-zinc-200 text-zinc-900 px-10 py-5 rounded-2xl font-bold text-lg hover:border-emerald-500 transition-all">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">R</div>
            <span className="font-bold text-lg">Rani B.</span>
          </div>
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Designed & Built with precision.
          </p>
          <div className="flex gap-6">
            <a href="http://www.linkedin.com/in/rani5788" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
