import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiFirebase, SiRedux } from "react-icons/si";

const skills = [
  { name: "React Native", icon: <FaReact />, level: 95 },
  { name: "TypeScript", icon: <SiTypescript />, level: 95 },
  { name: "JavaScript", icon: <FaJs />, level: 96 },
  { name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
  { name: "Firebase", icon: <SiFirebase />, level: 85 },
  { name: "Redux Toolkit", icon: <SiRedux />, level: 80 },
  { name: "Git", icon: <FaGitAlt />, level: 85 },
  { name: "GitHub", icon: <FaGithub />, level: 85 },
];

const Skills = () => {
  return (
    <section id="resume" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">My Skills</p>
          <h2 className="section-title">Technologies</h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>

                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>

                <span className="skill-level">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
