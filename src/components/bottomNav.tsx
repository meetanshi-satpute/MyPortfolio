import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

interface Props {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const navItems = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "resume", icon: <FaFileAlt />, label: "Resume" },
  { id: "portfolio", icon: <FaBriefcase />, label: "Portfolio" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const BottomNav: React.FC<Props> = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <motion.div
          key={item.id}
          className={`nav-item ${activeSection === item.id ? "active" : ""}`}
          onClick={() => scrollToSection(item.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item.icon}
          <span className="nav-label">{item.label}</span>
        </motion.div>
      ))}
    </nav>
  );
};

export default BottomNav;
