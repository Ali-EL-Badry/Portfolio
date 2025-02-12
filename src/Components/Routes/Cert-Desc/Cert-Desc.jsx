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
import { NavLink } from "react-router-dom";
import Git from './assests/Git and Github.png';
import './Cert-Desc.css'; 

const certificates = [
  {
    img: hcia,
    alt: "hcia",
    main: "HCIA:AI",
    sub: "From: Huawei ICT Academy",
    description: "Huawei Certified ICT Associate in AI (HCIA-AI) provides foundational knowledge in AI, covering machine learning, deep learning, and AI applications.",
    takeaways: [
      "Understanding AI fundamentals, including neural networks and deep learning.",
      "Exploring AI frameworks like TensorFlow and PyTorch.",
      "Learning how to train and optimize machine learning models.",
      "Gaining insights into AI applications in various industries.",
      "Developing AI models using Huawei’s computing platforms."
    ]
  },
  {
    img: java,
    alt: "Java",
    main: "Java Course",
    sub: "From: Huawei ICT Academy",
    description: "A comprehensive Java course covering object-oriented programming (OOP), Java syntax, and software development principles.",
    takeaways: [
      "Mastering Java syntax, including variables, loops, and conditionals.",
      "Understanding object-oriented programming (OOP) concepts like inheritance and polymorphism.",
      "Working with Java collections and data structures.",
      "Writing efficient, reusable, and maintainable Java code.",
      "Developing small Java applications and understanding multithreading."
    ]
  },
  {
    img: Git,
    alt: "Git",
    main: "Intro to Git and Github",
    sub: "From: Google | Coursera",
    description: "An introductory course on version control using Git and GitHub, essential for software development and collaboration.",
    takeaways: [
      "Understanding the importance of version control in software development.",
      "Learning Git commands like commit, push, pull, and merge.",
      "Creating and managing repositories on GitHub.",
      "Using branches for feature development and collaboration.",
      "Handling merge conflicts and contributing to open-source projects."
    ]
  },
  {
    img: aice,
    alt: "AICE",
    main: "AI Career Essential",
    sub: "From: Alx",
    description: "A practical AI career-oriented course covering essential skills in artificial intelligence and data science.",
    takeaways: [
      "Understanding key AI concepts, including supervised and unsupervised learning.",
      "Working with Python libraries like NumPy, Pandas, and Scikit-learn.",
      "Developing and evaluating machine learning models.",
      "Exploring real-world AI applications and use cases.",
      "Building a strong AI portfolio for job applications."
    ]
  },
  {
    img: ecpc,
    alt: "ECPC",
    main: "ECPC Competition",
    sub: "Technology: ECPC",
    description: "Egyptian Collegiate Programming Contest (ECPC), a competitive programming event focusing on algorithms and problem-solving.",
    takeaways: [
      "Improving problem-solving and algorithmic thinking skills.",
      "Practicing data structures like arrays, trees, and graphs.",
      "Enhancing coding efficiency with time and space complexity analysis.",
      "Collaborating in a competitive programming environment.",
      "Preparing for global programming competitions like ICPC."
    ]
  },
  {
    img: dotpy,
    alt: "DOtpy",
    main: "AI Diploma",
    sub: "From: Dotpy",
    description: "A specialized AI diploma covering machine learning, deep learning, and AI deployment strategies.",
    takeaways: [
      "Understanding the fundamentals of machine learning and deep learning.",
      "Exploring natural language processing (NLP) and computer vision techniques.",
      "Working with AI models using TensorFlow and PyTorch.",
      "Deploying AI models in production environments.",
      "Learning AI ethics and responsible AI development."
    ]
  },
  {
    img: clean,
    alt: "clean-code",
    main: "Clean Code",
    sub: "From: ITI",
    description: "A course on writing high-quality, maintainable, and readable code following best practices.",
    takeaways: [
      "Understanding the principles of clean and efficient code.",
      "Learning best practices for naming conventions and code structure.",
      "Avoiding code smells and refactoring code effectively.",
      "Writing modular and reusable functions.",
      "Enhancing software maintainability with proper documentation."
    ]
  },
  {
    img: oop,
    alt: "OOP",
    main: "Mastering OOP",
    sub: "From: ITI",
    description: "An advanced object-oriented programming course covering design patterns and best practices.",
    takeaways: [
      "Understanding OOP principles: encapsulation, inheritance, polymorphism, and abstraction.",
      "Implementing design patterns like Singleton, Factory, and Observer.",
      "Enhancing software architecture using SOLID principles.",
      "Building scalable and maintainable object-oriented applications.",
      "Applying OOP concepts in real-world projects."
    ]
  },
  {
    img: hc,
    alt: "HTML-CSS",
    main: "HTML and CSS",
    sub: "From: ITI",
    description: "A fundamental course on web development using HTML and CSS for creating responsive websites.",
    takeaways: [
      "Learning HTML structure, elements, and semantic tags.",
      "Mastering CSS for styling and layout design.",
      "Using Flexbox and Grid for responsive web design.",
      "Applying media queries for mobile-first development.",
      "Understanding CSS animations and transitions."
    ]
  },
  {
    img: py,
    alt: "python",
    main: "Python",
    sub: "From: Kaggle",
    description: "An introductory Python course covering essential programming concepts and applications.",
    takeaways: [
      "Learning Python syntax, variables, and data types.",
      "Understanding control flow: loops and conditionals.",
      "Working with functions and object-oriented programming in Python.",
      "Using Python for data manipulation and automation.",
      "Writing scripts for real-world applications."
    ]
  },
  {
    img: pan,
    alt: "Pandas",
    main: "Pandas",
    sub: "From: Kaggle",
    description: "A course on Pandas, a powerful library for data manipulation and analysis.",
    takeaways: [
      "Understanding data structures: Series and DataFrames.",
      "Loading, cleaning, and transforming datasets.",
      "Performing data aggregation and grouping.",
      "Using Pandas for exploratory data analysis (EDA).",
      "Handling missing data and outliers effectively."
    ]
  },
  {
    img: machine,
    alt: "intro-to-machine",
    main: "Intro to Machine Learning",
    sub: "From: Kaggle",
    description: "A beginner-friendly course on the basics of machine learning, including supervised and unsupervised learning techniques.",
    takeaways: [
      "Understanding key machine learning concepts and algorithms.",
      "Working with Scikit-learn for model building.",
      "Evaluating model performance using metrics like accuracy and RMSE.",
      "Applying machine learning to real-world datasets.",
      "Handling data preprocessing and feature engineering."
    ]
  },
  {
    img: data,
    alt: "data-cleaning",
    main: "Data Cleaning",
    sub: "From: Kaggle",
    description: "A course on cleaning and preprocessing datasets to improve data quality for analysis and machine learning models.",
    takeaways: [
      "Identifying and handling missing values.",
      "Standardizing and normalizing data.",
      "Detecting and fixing inconsistent or erroneous data.",
      "Transforming and encoding categorical variables.",
      "Using Python libraries like Pandas for data cleaning tasks."
    ]
  },
  {
    img: sql,
    alt: "sql",
    main: "SQL Course",
    sub: "From: Udemy",
    description: "A comprehensive SQL course covering database management, queries, and data analysis.",
    takeaways: [
      "Understanding SQL syntax and commands (SELECT, INSERT, UPDATE, DELETE).",
      "Writing complex queries using JOIN, GROUP BY, and HAVING.",
      "Working with relational databases like MySQL and PostgreSQL.",
      "Optimizing queries for better performance.",
      "Using SQL for data analysis and reporting."
    ]
  }
];
const certDesc = () => {
  const { certId } = useParams();
  
  const cert = certificates.find(({ alt }) => alt === certId);
  
  return (
    <>
      <div className="describiton">
        <div className="all">
        <div className="text-container">
          <div className="big-text">CERTIFICATE</div>
          <div className="title-text">Certificate Description</div>
        </div>
        <hr className="lin" />
          <div className="cert-details">
            
          <div className="text">
            <h1>{cert.main}</h1>
            <p className="sup-title">{cert.sub}</p>
            <p className="d">{cert.description}</p>
            <hr className="lin" />
            <h2>Key Takeaways:</h2>
            <ul>
              {cert.takeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
          </div>
          <div className="image-container">
            <motion.img src={cert.img} alt={cert.alt} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1 }}/>
          </div>
        </div>
        <div className="banner">
          <div className="limit">
            <NavLink to="/" className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Return Main</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </NavLink>
          </div>
        </div>
        </div>
      </div>
    </>
    
  );
};

export default certDesc;