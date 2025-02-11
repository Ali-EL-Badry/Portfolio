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

const certificates = [
  { img: hcia, alt: "hci", main: "HCIA:AI", sub: "From: Huawei ICT Academy" },
  { img: java, alt: "Java", main: "Java Course", sub: "From: Huawei ICT Academy" },
  { img: Git, alt: "Git", main: "Intro to Git and Github", sub: "From: Google | Coursera" },
  { img: aice, alt: "AICE", main: "AI Career Essential", sub: "From: Alx" },
  { img: ecpc, alt: "ECPC", main: "ECPC Competition", sub: "Technology: ECPC" },
  { img: dotpy, alt: "DOtpy", main: "AI Diploma", sub: "From: Dotpy" },
  { img: clean, alt: "clean", main: "Clean Code", sub: "From: ITI" },
  { img: oop, alt: "OOP", main: "Mastering OOP", sub: "From: ITI" },
  { img: hc, alt: "HTML-CSS", main: "HTML and CSS", sub: "From: ITI" },
  { img: py, alt: "python", main: "Python", sub: "From: Kaggle" },
  { img: pan, alt: "Pandas", main: "Pandas", sub: "From: Kaggle" },
  { img: machine, alt: "Intro to Machine Learning", main: "Intro to Machine Learning", sub: "From: Kaggle" },
  { img: data, alt: "Data Cleaning", main: "Data Cleaning", sub: "From: Kaggle" },
  { img: sql, alt: "SQL", main: "SQL Course", sub: "From: Udemy" },
];

const Cert = () => {
  return (
    <>
      <div className="title first">Certificates</div>
      <hr />
      <motion.div 
        className="cards"
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0 }} 
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.3 } }
        }}
      >
        {certificates.map(({ img, alt, main, sub }, index) => (
          <motion.div 
            className="ca" 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <img src={img} alt={alt} />
            <p className="main">{main}</p>
            <p className="sub">{sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Cert;