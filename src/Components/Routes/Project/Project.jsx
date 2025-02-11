import React from 'react'
import './Project.css'
import pothole from './assests/pothole detection (1).png'
import machine from './assests/Machine.png';
import vole from './assests/vole.png';
import fasion from './assests/fasion.jpg';
import house from './assests/house.png';
import elearn from './assests/e-learn.png';
import xo from './assests/x.jpeg';
import pho from './assests/photoshop..png'
import { motion } from "framer-motion";

const projects = [
  {
    title: "Data Science Project",
    items: [
      {
        link: "https://github.com/Ali-EL-Badry/Pothole-Detection",
        img: pothole,
        alt: "pothole Detection",
        main: "Pothole-Detection",
        sub: "Technology: YOLO",
      },
      {
        link: "https://github.com/Ali-EL-Badry/Machine-learning-Algorithm",
        img: machine,
        alt: "Machine Learning Algo.",
        main: "Machine Learning Algo.",
        sub: "Technology: Supervised and Unsupervised Algo.",
      },
    ],
    kaggle: true,
  },
  {
    title: "Web Development",
    items: [
      {
        link: "https://github.com/Ali-EL-Badry/Star-Union-Tasks/tree/main/Task_5",
        img: fasion,
        alt: "Fasion Corner",
        main: "Fasion Corner",
        sub: "Technology: React, HTML, Bootstrap, CSS",
      },
      {
        link: "https://github.com/Ali-EL-Badry/Star-Union-Tasks/tree/main/Task%202",
        img: house,
        alt: "Home",
        main: "My House",
        sub: "Technology: Html,css,js,bootstrap.",
      },
      {
        link: "https://github.com/Ali-EL-Badry/Star-Union-Tasks/tree/main/Task%201",
        img: elearn,
        alt: "e-learn",
        main: "E-Learn Template",
        sub: "Technology: Html, css",
      },
    ],
  },
  {
    title: "Other Fields Project",
    items: [
      {
        link: "https://github.com/Ali-EL-Badry/Vole_Machine_Simulator",
        img: vole,
        alt: "vole machine",
        main: "Vole Machine Simulator",
        sub: "Technology: C++, QT",
      },
      {
        link: "https://github.com/Ali-EL-Badry/Pisc-modifier",
        img: pho,
        alt: "PiscArt.",
        main: "piscArt",
        sub: "Technology: C++.",
      },
      {
        link: "https://github.com/Ali-EL-Badry/X-Game-O",
        img: xo,
        alt: "X-Games-o",
        main: "X-Games-o",
        sub: "Technology: C++",
      },
    ],
  },
];

const Project = () => {
  return (
    <motion.div 
      className="pro"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Starts when 20% is visible
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } }
      }}
    >
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          className="project-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className={`title ${index === 0 ? "first" : ""}`}>{project.title}</div>
          <hr />
          <motion.div 
            className="cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5 } }
            }}
          >
            {project.items.map((item, i) => (
              <motion.a 
                href={item.link} 
                className="ca" 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img src={item.img} alt={item.alt} />
                <p className="main">{item.main}</p>
                <p className="sub">{item.sub}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Kaggle Section Under Data Science Section */}
          {project.kaggle && (
            <motion.div 
              className="kaggle-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>If you want to see more trained models and notebooks, visit my</p>
              <a href="https://www.kaggle.com/alyelbadry" className="kaggle-button" target="_blank">
                Kaggle Account
              </a>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};


export default Project;