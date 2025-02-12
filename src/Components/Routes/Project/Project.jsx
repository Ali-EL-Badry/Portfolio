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
    title: "AI Project",
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
    title: "Different Fields Project",
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
    <motion.div className="pro">
  {projects.map((project, index) => (
    <motion.div 
      key={index}
      className="project-section"
    >
      <motion.div initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className={`title ${index === 0 ? "first" : ""}`}>{project.title}</motion.div>
      <motion.hr  initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}/>

      <motion.div 
        className="cards"
      >
        {project.items.map((item, i) => (
          <motion.a 
            href={item.link} 
            className="ca" 
            key={i}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}  
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}  
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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