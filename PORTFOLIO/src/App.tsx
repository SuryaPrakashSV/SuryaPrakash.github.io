import "./styles.css";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const techStack = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "Databricks",
    icon: "https://avatars.githubusercontent.com/u/17601585?s=200&v=4",
  },
  {
    name: "Spark",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  },
  {
    name: "Tableau",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg",
  },
  {
    name: "Power BI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

const skillsBar = [
  { name: "Python", level: 95 },
  { name: "SQL", level: 90 },
  { name: "AWS", level: 90 },
  { name: "Databricks", level: 85 },
  { name: "Spark", level: 85 },
  { name: "Tableau", level: 80 },
  { name: "Power BI", level: 80 },
];

const certifications = [
  {
    name: "AWS Certified Data Engineer – Associate",
    badge:
      "https://images.credly.com/size/340x340/images/70ac94e8-1682-400b-90a2-7c71ab774bee/image.png",
    url: "https://www.credly.com/badges/your-badge-link",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    badge:
      "https://images.credly.com/size/340x340/images/1e6f3a7c-485d-4c60-87fb-bb5b1b6c3b09/image.png",
    url: "https://www.credly.com/badges/your-badge-link",
  },
];

const projects = [
  {
    title: "Fall Detection",
    img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    desc: "Developed a real-time fall detection system using Python, OpenCV, and machine learning. Enabled automated alerts for safety-critical environments. Integrated with cloud for notification delivery.",
    github: "https://github.com/yourfall-detection-project",
  },
  {
    title: "SQL Data Warehouse",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    desc: "Designed and implemented a scalable SQL data warehouse for analytics and reporting. Built ETL pipelines, optimized query performance, and integrated BI dashboards for business stakeholders.",
    github: "https://github.com/yoursql-datawarehouse-project",
  },
];

const contact = {
  email: "prakashsiriki007@gmail.com",
  linkedin: "https://www.linkedin.com/in/venkata-surya-prakash-siriki",
  github: "https://github.com/yourusername",
  kaggle: "https://www.kaggle.com/yourusername",
  address: "United States (open to relocation)",
};

export default function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const certRef = useRef(null);
  const projRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md shadow">
        <ul className="flex justify-center gap-8 py-4 font-semibold text-blue-300 tracking-wide">
          <li>
            <button onClick={() => scrollTo(aboutRef)}>About</button>
          </li>
          <li>
            <button onClick={() => scrollTo(skillsRef)}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollTo(certRef)}>Certifications</button>
          </li>
          <li>
            <button onClick={() => scrollTo(projRef)}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollTo(contactRef)}>Contact</button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={aboutRef}
        className="flex flex-col items-center pt-14 pb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            Venkata Surya Prakash Siriki
          </h1>
          <div className="text-blue-200 text-xl mt-1">Data Engineer</div>
          <div className="max-w-xl text-gray-300 mt-4 mb-4">
            Data Engineer focused on building reliable, scalable cloud data
            platforms. 5+ years transforming business needs into data-driven
            solutions. Let’s turn data into impact!
          </div>
        </div>
      </motion.section>

      {/* Skills & Tech Stack with animated icons and bars */}
      <motion.section
        ref={skillsRef}
        className="max-w-4xl mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl font-semibold mb-7 text-blue-300">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-7">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.08 }}
            >
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
              <span className="text-gray-200 text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
        {/* Animated Skill Bars */}
        <div className="space-y-4 mt-10 w-full max-w-md mx-auto">
          {skillsBar.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <motion.div
                className="h-2 rounded bg-blue-900 mt-1"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 * i }}
                viewport={{ once: true }}
                style={{ background: "linear-gradient(90deg,#60a5fa,#1e40af)" }}
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        ref={certRef}
        className="max-w-4xl mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl font-semibold mb-7 text-blue-300">
          Certifications
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {certifications.map((cert, idx) => (
            <motion.a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="bg-gray-800 rounded-xl p-4 flex flex-col items-center shadow hover:scale-105 transition"
              whileHover={{ scale: 1.07 }}
            >
              <img
                src={cert.badge}
                alt={cert.name}
                className="w-16 h-16 mb-2"
              />
              <span className="text-gray-200 font-medium text-center">
                {cert.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        ref={projRef}
        className="max-w-4xl mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl font-semibold mb-7 text-blue-300">
          Project Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-xl p-4 shadow flex flex-col hover:shadow-xl transition"
              whileHover={{ scale: 1.04 }}
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-24 h-24 object-contain mx-auto mb-3"
              />
              <h4 className="font-bold text-lg text-blue-200 mb-2 text-center">
                {proj.title}
              </h4>
              <p className="text-gray-200 mb-3 text-center">{proj.desc}</p>
              <div className="flex justify-center gap-4">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        ref={contactRef}
        className="max-w-4xl mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-blue-300">Contact</h2>
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow mb-8">
          <div className="text-lg mb-3">
            <span className="font-bold text-gray-200">Email: </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-400 hover:underline"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex gap-6 mt-2">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
            <a
              href={contact.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Kaggle
            </a>
          </div>
          <div className="mt-3 text-gray-400 text-sm">{contact.address}</div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full text-center py-5 text-gray-500 text-sm">
        © {new Date().getFullYear()} Venkata Surya Prakash Siriki. All rights
        reserved.
      </footer>
    </div>
  );
}
