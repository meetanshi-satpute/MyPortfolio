import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Orlay: Food Delivery at DineIn",
    description:
      "Order food directly from your table with real-time tracking and seamless checkout.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
    screenshots: [
      "/images/screensort1.jpeg",
      "/images/screensort2.jpeg",
      "/images/screensort3.jpeg",
      "/images/screensort4.jpeg",
      "/images/screensort5.jpeg",
      "/images/screensort6.jpeg",
    ],
    androidLink:
      "https://play.google.com/store/apps/details?id=com.orlay&hl=en_IN", // 👉 add
    iosLink:
      "https://apps.apple.com/in/app/orlay-food-delivery-at-dinein/id6445892949", // 👉 add
  },
  {
    title: "Orlay Business Partner",
    description:
      "Manage menus, orders, and analytics to streamline restaurant operations.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500",
    screenshots: [
      "/images/Bscreensort1.jpeg",
      "/images/Bscreensort2.jpeg",
      "/images/Bscreensort3.jpeg",
      "/images/Bscreensort4.jpeg",
      "/images/Bscreensort5.jpeg",
      "/images/Bscreensort6.jpeg",
      "/images/Bscreensort7.jpeg",
      "/images/Bscreensort9.jpeg",
      "/images/Bscreensort10.jpeg",
    ],

    androidLink:
      "https://play.google.com/store/apps/details?id=com.orlaybusinesspartner&hl=en_IN", // 👉 add
    iosLink:
      "https://apps.apple.com/in/app/orlay-business-partner/id6742981947", // 👉 add
  },

  {
    title: "Orlay Delivery Partner",
    description:
      "Accept deliveries, navigate routes, and track earnings in real time.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500",
    screenshots: [
      "/images/Dscreensort1.jpeg",
      "/images/Dscreensort2.jpeg",
      "/images/Dscreensort3.jpeg",
      "/images/Dscreensort4.jpeg",
      "/images/Dscreensort5.jpeg",
      "/images/Dscreensort6.jpeg",
      "/images/Dscreensort7.jpeg",
      "/images/Dscreensort8.jpeg",
      "/images/Dscreensort9.jpeg",
      "/images/Dscreensort10.jpeg",
      "/images/Dscreensort11.jpeg",
      "/images/Dscreensort12.jpeg",
    ],
    androidLink:
      "https://play.google.com/store/apps/details?id=com.ordelivery&hl=en_IN", // 👉 add
    iosLink:
      "https://apps.apple.com/in/app/orlay-delivery-partner/id6743389418", // 👉 add
  },
  {
    title: "Orlay Admin Panel App",
    description:
      "Control users, partners, and platform analytics from a unified dashboard.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500",
    screenshots: [
      "/images/Ascreensort1.jpeg",
      "/images/Ascreensort2.jpeg",
      "/images/Ascreensort3.jpeg",
      "/images/Ascreensort4.jpeg",
      "/images/Ascreensort5.jpeg",
      "/images/Ascreensort6.jpeg",
      "/images/Ascreensort7.jpeg",
      "/images/Ascreensort8.jpeg",
    ],
  },
  {
    title: "Cricket Wicket",
    description:
      "Track live scores, manage teams, and schedule matches with an intuitive mobile experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
    screenshots: [
      "/images/Cscreensort1.jpeg",
      "/images/Cscreensort2.jpeg",
      "/images/Cscreensort3.jpeg",
      "/images/Cscreensort4.jpeg",
      "/images/Cscreensort5.jpeg",
      "/images/Cscreensort6.jpeg",
      "/images/Cscreensort7.jpeg",
      "/images/Cscreensort8.jpeg",
      "/images/Cscreensort9.jpeg",
      "/images/Cscreensort10.jpeg",
      "/images/Cscreensort11.jpeg",
      "/images/Cscreensort12.jpeg",
    ],
  },
];

const Portfolio = ({ selectedProject, setSelectedProject }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (!selectedProject) return;
    setCurrentIndex((prev) =>
      prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    if (!selectedProject) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1,
    );
  };

  const openProject = (project:any) => {
    setSelectedProject(project);
    setCurrentIndex(0);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <p className="section-subtitle">My Portfolio</p>
        <h2 className="section-title">Recent Works</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card"
              whileHover={{ y: -6 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-buttons">
                {project.androidLink && (
                  <button
                    className="btn-outline"
                    onClick={() => window.open(project.androidLink, "_blank")}
                  >
                    Android Link <FaArrowRight />
                  </button>
                )}

                {project.iosLink && (
                  <button
                    className="btn-outline"
                    onClick={() => window.open(project.iosLink, "_blank")}
                  >
                    Ios Link <FaArrowRight />
                  </button>
                )}

                <button
                  className="btn-filled"
                  onClick={() => openProject(project)}
                >
                  Demo <FaExternalLinkAlt />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ⭐ HEADER */}
              <div className="modal-header">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </button>
              </div>

              {/* ⭐ SLIDER */}
              <div className="slider">
                <button className="slider-btn left" onClick={prevSlide}>
                  ❮
                </button>

                <img
                  src={selectedProject.screenshots[currentIndex]}
                  alt="screenshot"
                  className="slider-image"
                />

                <button className="slider-btn right" onClick={nextSlide}>
                  ❯
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
