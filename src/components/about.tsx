import { motion } from "framer-motion";
import { FaBriefcase, FaUser } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">My Intro</p>
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <div className="about-grid">
              <div className="about-card">
                <FaBriefcase className="about-icon" />
                <h4>Experience</h4>
                <p>2 Years</p>
                <span>Mobile Development</span>
              </div>

              <div className="about-card">
                <FaBriefcase className="about-icon" />
                <h4>Completed</h4>
                <p>4+ Projects</p>
                <span>Worldwide</span>
              </div>

              <div className="about-card">
                <FaUser className="about-icon" />
                <h4>Support</h4>
                <p>24/7 Online</p>
                <span>Support</span>
              </div>
            </div>

            <div className="about-text">
              <p>
                I’m a React Native developer focused on crafting high-performance
                cross-platform mobile apps.
              </p>
              <p>
                I specialize in JavaScript, TypeScript, and scalable mobile
                architecture, delivering clean and reliable solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
