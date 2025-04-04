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
import nyTaxi from "./assests/ny-taxi.png";

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
        tags: ["YOLO", "Computer Vision", "Deep Learning"]
      },
      {
        link: "https://github.com/Ali-EL-Badry/Machine-learning-Algorithm",
        img: machine,
        alt: "Machine Learning Algo.",
        main: "Machine Learning Algo.",
        sub: "Technology: Supervised and Unsupervised Algo.",
        tags: ["Machine Learning", "Python", "Data Science"]
      },
      {
        link: "https://github.com/Ali-EL-Badry/NY-Taxi-DashBoard",
        img: nyTaxi,
        alt: "NY Taxi",
        main: "New york Taxi Dashboard",
        sub: "Technology: Python, Dash, Plotly",
        tags: ["Data Visualization", "Dash", "Plotly"]
      }
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
        tags: ["React", "Bootstrap", "CSS"]
      },
      {
        link: "https://github.com/Ali-EL-Badry/Star-Union-Tasks/tree/main/Task%202",
        img: house,
        alt: "Home",
        main: "My House",
        sub: "Technology: Html,css,js,bootstrap.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"]
      },
      {
        link: "https://github.com/Ali-EL-Badry/Star-Union-Tasks/tree/main/Task%201",
        img: elearn,
        alt: "e-learn",
        main: "E-Learn Template",
        sub: "Technology: Html, css",
        tags: ["HTML", "CSS"]
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
        tags: ["C++", "QT", "Simulation"]
      },
      {
        link: "https://github.com/Ali-EL-Badry/Pisc-modifier",
        img: pho,
        alt: "PiscArt.",
        main: "piscArt",
        sub: "Technology: C++.",
        tags: ["C++", "Image Processing"]
      },
      {
        link: "https://github.com/Ali-EL-Badry/X-Game-O",
        img: xo,
        alt: "X-Games-o",
        main: "X-Games-o",
        sub: "Technology: C++",
        tags: ["C++", "Game Development"]
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
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}  
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }} 
            className={`title ${index === 0 ? "first" : ""}`}
          >
            {project.title}
          </motion.div>
          <motion.hr  
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}  
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <motion.div className="cards">
            {project.items.map((item, i) => (
              <motion.a 
                href={item.link} 
                className="ca" 
                key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}  
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="img-container">
                  <img src={item.img} alt={item.alt} />
                  <div className="img-overlay"></div>
                </div>
                <div className="content">
                  <p className="main">{item.main}</p>
                  <p className="sub">{item.sub}</p>
                  <div className="tags">
                    {item.tags && item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
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
              <a href="https://www.kaggle.com/alyelbadry" className="kaggle-button" target="_blank" rel="noopener noreferrer">
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