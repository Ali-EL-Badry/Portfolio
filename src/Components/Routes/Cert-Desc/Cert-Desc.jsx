import React from "react";
import { useParams } from "react-router-dom";
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
const certDesc = () => {
  const { certId } = useParams();
  
  return (
    <>
    </>
  );
};

export default certDesc;