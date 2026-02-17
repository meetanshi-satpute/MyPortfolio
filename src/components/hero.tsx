import { motion } from "framer-motion";

interface Props {
  onDownloadCV: () => void;
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<Props> = ({ onDownloadCV, scrollToSection }) => {
  return (
    <section id="home" className="section hero-section">
      
      {/* Main Content */}
      <div className="center">
        <motion.div className="name-tag">Meetanshi Satpute</motion.div>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I'm
        </motion.h3>

        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Meetanshi Satpute
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          React Native Developer
        </motion.p>

        <motion.div
          className="buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button className="outline" onClick={onDownloadCV}>
            Download CV
          </button>

          <button className="filled" onClick={() => scrollToSection("about")}>
            About
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
