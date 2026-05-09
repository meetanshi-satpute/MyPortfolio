// import React, { useState } from "react";
// import {
//   FaLinkedinIn,
//   FaGithub,
//   FaInstagram,
//   FaHome,
//   FaUser,
//   FaFileAlt,
//   FaBriefcase,
//   FaEnvelope,
//   FaMoon,
//   FaSun,
//   FaMouse,
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaArrowRight,
//   FaExternalLinkAlt,
//   FaGitAlt,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiTailwindcss,
//   SiMongodb,
//   SiExpress,
//   SiFirebase,
//   SiRedux,
// } from "react-icons/si";
// import { motion } from "framer-motion";
// import "./index.css";

// const App: React.FC = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const projects = [
//     {
//       title: "Lumetech Website",
//       description:
//         "Transform Your Digital Presence - A modern web development platform",
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
//       tags: ["Web"],
//       link: "#",
//     },
//     {
//       title: "Todo List App",
//       description:
//         "A beautiful and functional todo list application with modern UI",
//       image:
//         "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
//       tags: ["App"],
//       demo: "#",
//       link: "#",
//     },
//     {
//       title: "TopTenBazar website",
//       description: "Everything You Need, In One Place - E-commerce platform",
//       image:
//         "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
//       tags: ["Web"],
//       link: "#",
//     },
//   ];

//   const skills = [
//     { name: "React Native", icon: <FaReact />, level: 95 },
//     { name: "TypeScript", icon: <SiTypescript />, level: 95 },
//     { name: "JavaScript", icon: <FaJs />, level: 96},
//     { name: "HTML5", icon: <FaHtml5 />, level: 95 },
//     { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
//     { name: "Firebase", icon: <SiFirebase />, level: 85 },
//     { name: "Redux Toolkit", icon: <SiRedux />, level: 80 },
//     { name: "Git", icon: <FaGitAlt />, level: 85 },
//     { name: "GitHub", icon: <FaGithub />, level: 85 },
//   ];

//   const navItems = [
//     { id: "home", icon: <FaHome />, label: "Home" },
//     { id: "about", icon: <FaUser />, label: "About" },
//     { id: "resume", icon: <FaFileAlt />, label: "Resume" },
//     { id: "portfolio", icon: <FaBriefcase />, label: "Portfolio" },
//     { id: "contact", icon: <FaEnvelope />, label: "Contact" },
//   ];

//   const scrollToSection = (id: string) => {
//     setActiveSection(id);
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };
//   // Add this function in your component
//   const handleDownloadCV = () => {
//     // Create a temporary link element
//     const link = document.createElement("a");
//     link.href = "/Meetanshi_satpute_resume.pdf"; // Path to your CV in public folder
//     link.download = "Meetanshi_satpute_resume.pdf"; // Name for downloaded file
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
//   return (
//     <div className={`app ${isDarkMode ? "dark" : "light"}`}>
//       {/* Theme Toggle */}
//       <motion.div
//         className="theme-toggle"
//         onClick={() => setIsDarkMode(!isDarkMode)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         {isDarkMode ? <FaMoon /> : <FaSun />}
//       </motion.div>

//       {/* Navigation Bar */}
//       <nav className="bottom-nav">
//         {navItems.map((item) => (
//           <motion.div
//             key={item.id}
//             className={`nav-item ${activeSection === item.id ? "active" : ""}`}
//             onClick={() => scrollToSection(item.id)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             {item.icon}
//             <span className="nav-label">{item.label}</span>
//           </motion.div>
//         ))}
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="section hero-section">
//         {/* Left Social Icons */}
//         <div className="social">
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.2, color: "#6c63ff" }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <FaLinkedinIn />
//           </motion.a>
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.2, color: "#6c63ff" }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <FaGithub />
//           </motion.a>
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.2, color: "#6c63ff" }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <FaInstagram />
//           </motion.a>
//         </div>

//         {/* Right Scroll Text */}
//         <div className="scroll-text">
//           <FaMouse className="mouse-icon" />
//           <span>Scroll Down</span>
//         </div>

//         {/* Center Content */}
//         <div className="center">
//           <motion.div className="name-tag">anshi Satpute</motion.div>

//           <motion.h3
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Hello, I'm
//           </motion.h3>

//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             Meetanshi Satpute
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 1 }}
//           >
//             React Native Developer
//           </motion.p>

//           <motion.div
//             className="buttons"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.1, duration: 1 }}
//           >
//             <button className="outline" onClick={handleDownloadCV}>
//               Download CV
//             </button>
//             <button className="filled" onClick={() => scrollToSection("about")}>
//               About
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="section about-section">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="section-subtitle">My Intro</p>
//             <h2 className="section-title">About Me</h2>

//             <div className="about-content">
//               <div className="about-grid">
//                 <motion.div
//                   className="about-card"
//                   whileHover={{ y: -10 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <FaBriefcase className="about-icon" />
//                   <h4>Experience</h4>
//                   <p>2 Years</p>
//                   <span>Mobile Development</span>
//                 </motion.div>

//                 <motion.div
//                   className="about-card"
//                   whileHover={{ y: -10 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <FaBriefcase className="about-icon" />
//                   <h4>Completed</h4>
//                   <p>4+ Projects</p>
//                   <span>Worldwide</span>
//                 </motion.div>

//                 <motion.div
//                   className="about-card"
//                   whileHover={{ y: -10 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <FaUser className="about-icon" />
//                   <h4>Support</h4>
//                   <p>24/7 Online</p>
//                   <span>Support</span>
//                 </motion.div>
//               </div>

//               <div className="about-text">
//                 <p>
//                   I’m a React Native developer focused on crafting
//                   high-performance cross-platform mobile apps. I specialize in
//                   turning ideas into intuitive, scalable, and visually engaging
//                   products.
//                 </p>
//                 <p>
//                   With solid expertise in JavaScript, TypeScript, and modern
//                   mobile architecture, I’m committed to writing clean code and
//                   delivering reliable solutions that create real value for users
//                   and businesses.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="resume" className="section skills-section">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="section-subtitle">My Skills</p>
//             <h2 className="section-title">Technologies</h2>
//             <p className="skills-description">
//               Proficient in these technologies for creating modern, responsive
//               applications
//             </p>

//             <div className="skills-grid">
//               {skills.map((skill, index) => (
//                 <motion.div
//                   key={skill.name}
//                   className="skill-card"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -5, scale: 1.05 }}
//                 >
//                   <div className="skill-icon">{skill.icon}</div>
//                   <h4>{skill.name}</h4>
//                   <div className="skill-bar">
//                     <motion.div
//                       className="skill-progress"
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.1 + 0.2, duration: 1 }}
//                     />
//                   </div>
//                   <span className="skill-level">{skill.level}%</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section id="portfolio" className="section portfolio-section">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="section-subtitle">My Portfolio</p>
//             <h2 className="section-title">Recent Works</h2>

//             <div className="projects-grid">
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={project.title}
//                   className="project-card"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 }}
//                   whileHover={{ y: -10 }}
//                 >
//                   <div className="project-image">
//                     <img src={project.image} alt={project.title} />
//                     <div className="project-tag">{project.tags[0]}</div>
//                   </div>
//                   <div className="project-content">
//                     <h3>{project.title}</h3>
//                     <p>{project.description}</p>
//                     <div className="project-buttons">
//                       <button className="btn-outline">
//                         View Project <FaArrowRight />
//                       </button>
//                       {project.demo && (
//                         <button className="btn-filled">
//                           Demo <FaExternalLinkAlt />
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section contact-section">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="section-subtitle">Get in Touch</p>
//             <h2 className="section-title">Contact Me</h2>

//             <div className="contact-content">
//               <div className="contact-info">
//   <div className="contact-item">
//     <FaEnvelope />
//     <div>
//       <h4>Email</h4>
//       <p>
//         <a href="mailto:meetanshisatpute@gmail.com">
//           meetanshisatpute@gmail.com
//         </a>
//       </p>
//     </div>
//   </div>

//   <div className="contact-item">
//     <FaLinkedinIn />
//     <div>
//       <h4>LinkedIn</h4>
//       <a
//         href="https://www.linkedin.com/in/meetanshi-satpute-9a8279178?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         View Profile
//       </a>
//     </div>
//   </div>

//   <div className="contact-item">
//     <FaGithub />
//     <div>
//       <h4>GitHub</h4>
//       <a
//         href="https://github.com/meetanshi-satpute"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         github.com/meetanshi-satpute
//       </a>
//     </div>
//   </div>
// </div>

//               <form className="contact-form">
//                 <input type="text" placeholder="Your Name" />
//                 <input type="email" placeholder="Your Email" />
//                 <textarea placeholder="Your Message" rows={5}></textarea>
//                 <button type="submit" className="btn-filled">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import BottomNav from "./components/bottomNav";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Meetanshi_Satpute_React_Native_Developer.pdf";
    link.download = "Meetanshi_Satpute_React_Native_Developer.pdf";
    link.click();
  };

  return (
    <div>
      
      {!selectedProject && (
        <BottomNav
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      )}

      <Hero onDownloadCV={handleDownloadCV} scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Portfolio
        setSelectedProject={setSelectedProject}
        selectedProject={selectedProject}
      />
      <div style={{ paddingBottom: "100px" }}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
