import React from "react";
import { motion } from "framer-motion";
import "./App.css"; // Vos styles CSS

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

const Header = () => (
  <motion.header
    className="headercontent"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="bylinux">
      <span>By</span>
      <strong>Linux Logos</strong>
    </div>
    <nav className="navcontent">
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div className="socialmedia">
      <ul>
        <li>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  </motion.header>
);

const Main = () => (
  <main>
    <SectionPresentation />
    <SectionSkills />
    <SectionServices />
  </main>
);

// Section Présentation
const SectionPresentation = () => (
  <motion.section
    className="presentation"
    id="Home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="myname">
      <p>I'm</p>
      <p>Jean-sam Amétépé</p>
      <p>Web Developer</p>
      <p>Network and System Administrator</p>
      <p>UX/UI Designer</p>
      <p id="contactme">
        <a href="#">Contact me</a>
      </p>
    </div>
  </motion.section>
);

// Section Compétences
const SectionSkills = () => (
  <section className="skills-component" id="Skills">
    <motion.h2
      className="navstep"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Skills
    </motion.h2>
    <div className="servicescontaint">
      {["Coding", "Network & System", "UI/UX Design", "Security System"].map(
        (skill, index) => (
          <motion.div
            className="servicescomponent"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div>
              <img
                src={`${skill.toLowerCase().replace(" ", "-")}.png`}
                alt={skill}
              />
            </div>
            <div className="skills">{skill}</div>
          </motion.div>
        )
      )}
    </div>
  </section>
);

// Section Services
const SectionServices = () => (
  <section className="services" id="Services">
    <motion.h2
      className="navstep"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Services
    </motion.h2>
    <div>
      {[1, 2, 3, 4].map((service, index) => (
        <motion.div
          className="services-details"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="services-images">
            <img src={`service${service}.png`} alt={`Service ${service}`} />
            <div className="title-services">
              <h5>Title of Service {service}</h5>
              <p className="description-services">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default App;
