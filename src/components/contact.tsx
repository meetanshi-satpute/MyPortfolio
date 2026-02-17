import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title">Contact Me</h2>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:meetanshisatpute@gmail.com">
                    meetanshisatpute@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaLinkedinIn />
                <div>
                  <h4>LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/meetanshi-satpute-9a8279178?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaGithub />
                <div>
                  <h4>GitHub</h4>
                  <a
                    href="https://github.com/meetanshi-satpute"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows={5}></textarea>
              <button className="btn-filled">Send Message</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
