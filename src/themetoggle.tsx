import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  isDarkMode: boolean;
  toggle: () => void;
}

const ThemeToggle: React.FC<Props> = ({ isDarkMode, toggle }) => {
  return (
    <motion.div
      className="theme-toggle"
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? <FaMoon /> : <FaSun />}
    </motion.div>
  );
};

export default ThemeToggle;
