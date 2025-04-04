import React from 'react'
import hcia from './assests/HCIA.jpg';
import java from './assests/java course.jpg';
import aice from './assests/alx.png';
import ecpc from './assests/ecpc.png';
import dotpy from './assests/dotpy.jpeg';
import clean from './assests/clean.png';
import oop from './assests/oop.png';
import hc from './assests/html.png';
import py from './assests/pyrhon.png';
import pan from './assests/pandas.png';
import machine from './assests/machine.png';
import data from './assests/data.png';
import sql from './assests/sql.jpg';
import { motion } from "framer-motion";
import Git from './assests/Git and Github.png';
import { NavLink } from 'react-router-dom';
import './Cert.css';

const certificates = [
  { img: hcia, alt: "hcia", main: "HCIA:AI", sub: "From: Huawei ICT Academy" },
  { img: java, alt: "Java", main: "Java Course", sub: "From: Huawei ICT Academy" },
  { img: Git, alt: "Git", main: "Intro to Git and Github", sub: "From: Google | Coursera" },
  { img: aice, alt: "AICE", main: "AI Career Essential", sub: "From: Alx" },
  { img: ecpc, alt: "ECPC", main: "ECPC Competition", sub: "Technology: ECPC" },
  { img: dotpy, alt: "DOtpy", main: "AI Diploma", sub: "From: Dotpy" },
  { img: clean, alt: "clean-code", main: "Clean Code", sub: "From: ITI" },
  { img: oop, alt: "OOP", main: "Mastering OOP", sub: "From: ITI" },
  { img: hc, alt: "HTML-CSS", main: "HTML and CSS", sub: "From: ITI" },
  { img: py, alt: "python", main: "Python", sub: "From: Kaggle" },
  { img: pan, alt: "Pandas", main: "Pandas", sub: "From: Kaggle" },
  { img: machine, alt: "intro-to-machine", main: "Intro to Machine Learning", sub: "From: Kaggle" },
  { img: data, alt: "data-cleaning", main: "Data Cleaning", sub: "From: Kaggle" },
  { img: sql, alt: "sql", main: "SQL Course", sub: "From: Udemy" },
];

const MotionNavLink = motion(NavLink);

const Cert = () => {
  return (
    <div className="certificates-container">
      <motion.div 
        className="title-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="title">Certificates</h1>
        <div className="title-underline"></div>
      </motion.div>

      <motion.div 
        className="certificates-grid"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {certificates.map(({ img, alt, main, sub }, index) => (
          <MotionNavLink 
            exact
            to={`/certificats/${alt}`}
            className="certificate-card" 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="card-content">
              <div className="image-wrapper">
                <img src={img} alt={alt} />
                <div className="image-overlay"></div>
              </div>
              <div className="text-content">
                <h3 className="cert-title">{main}</h3>
                <p className="cert-subtitle">{sub}</p>
              </div>
            </div>
          </MotionNavLink>
        ))}
      </motion.div>
    </div>
  );
};

export default Cert;