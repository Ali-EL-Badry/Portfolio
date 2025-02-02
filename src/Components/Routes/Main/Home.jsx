import './Home.css';
import React from 'react'
import videoBg from "./vi.mp4"; 
import Profile from './lol.jpg';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import pothole from './pothole detection (1).png';
import fasion from './fasion.jpg';
import vole from './vole.png';
import hcia from './HCIA.jpg';
import dotpy from './dotpy.jpeg';
import alx from './alx.png';


const Home = () =>{
  
  
  return (
    <>
      <div className="mainPage">
        <video autoPlay loop muted className="video-bg">
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="content">
          <div className="text">
            <p className="welcome">Welcome to My Portfolio,</p>
            <p className='Name'>I am Aly El-Badry</p>
            <p className="desc">An innovative-minded Data Scientist and Full-Stack Developer, aspiring to become an AI Engineer, blending creativity with technology to build intelligent solutions</p>
            <a className="btn" href="#contact" >Contact me</a>
            <a href="/Aly-El-Deen-Yasser-Ali-CV" download="Aly-El-Deen-Yasser-Ali-CV.pdf" className="btn">Download CV</a>

          </div>
        </div>
      </div>
      
      <div className='title'>Who is Aly El-Badry?</div>
      <hr />
      <div className="about" id="#about">
        <div className='about-content'>
          <img src={Profile} alt="profile-img" className='My-Image'/>
          <div className="about-text">
            <p className="main-text">I am a Second year Cairo University student in Faculty of computer science and Artifical inteligence and passionate Data Scientist and Full-Stack Developer, on my journey to becoming an AI Engineer.</p>
            <p className="subtext">
              
              <div className="sub">
              <div className="arrow-container">
                <FaArrowRight className="arrow-icon" />
              </div>
                <p className="factors">A FreeLancer on different plateform like Upwork and 5amsat that work as Data Scientist and as a web Developer.</p>
              </div>
              <div className="sub">
              <div className="arrow-container">
                <FaArrowRight className="arrow-icon" />
              </div>
                <p className="factors">A Data Scientist in Digital Egypt Pioneers Initiative (DEPI) guided by the vision of AMIT</p>
              </div>
              <div className="sub">
              <div className="arrow-container">
                <FaArrowRight className="arrow-icon" />
              </div>
              <p className="factors">A Past Student Union Member that participated in different event organization like Student Graduation Party in Cairo University</p>
              </div>
              <div className="sub">
              <div className="arrow-container">
                <FaArrowRight className="arrow-icon" />
              </div>
              <p className="factors">A AI Member in Star Union, DataSet expert on kaggle</p>
              </div>
            </p>
          </div>
        </div>
      </div>
      
      <div className='title'>Skills and Services</div>
      <hr />
      
      <div className="timeline">
      <video autoPlay loop muted className="video-bg">
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="container left">
          <h3>Data Science (Machine Learning , Deep Learning)</h3>
        </div>
        <div className="container right">
          <div className="details">
          <ul>
            <li>Proficient in Python (Pandas, NumPy, Scikit-learn, Matplotlib).</li>
            <li>Experience with machine learning algorithms (Linear Regression, Random Forest, SVM, KNN).</li>
            <li>Experience with TensorFlow and PyTorch for deep learning.</li>
            <li>Experience with data preprocessing and feature engineering.</li>
            <li>Model evaluation and hyperparameter tuning.</li>
            <li>Experience with data visualization and storytelling.</li>
          </ul>
          </div>
        </div>

        {/* Web Development Field */}
        <div className="container left">
          <h3>Web Development(Frontend and Backend Development)</h3>
        </div>
        <div className="container right">
          <div className="details">
            <ul>
              <li>Proficient in React.jsand modern front-end development.</li>
              <li>Skilled in building responsive UIs with Tailwind CSS and Bootstrap.</li>
              <li>Backend development using Django.</li>
              <li>Version control using Git and GitHub.</li>
            </ul>
          </div>
        </div>

        {/* Other Skills Field */}
        <div className="container left">
          <h3>Other Skills</h3>
        </div>
        <div className="container right">
          <div className="details">
            <ul>
              <li>Strong problem-solving and critical thinking abilities.</li>
              <li>Fluent in English with excellent communication skills.</li>
              <li>Experienced in agile project management methodologies.</li>
              <li>Experience with C++ , Java Development and worked with QT Framework.</li>
              <li>Enthusiastic team player with a growth mindset.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project">
        <div className='title'>Some Projects</div>
        <hr />
        <div className="projects">
          <a href="https://github.com/Ali-EL-Badry/Pothole-Detection" className="card">
            <img src={pothole} alt="pothole Detection" />
            <p className="main">Pothole-Detection</p>
            <p className="sub">Technology: YOLO</p>
          </a>
          <a href="https://github.com/Ali-EL-Badry/My-House" className="card">
            <img src={fasion} alt="Fassion" />
            <p className="main">Fasion Corner </p>
            <p className="sub">Technology:React, HTML, bootstrap and css</p>
          </a>
          <a href="https://github.com/Ali-EL-Badry/Vole_Machine_Simulator" className="card">
            <img src={vole} alt="vole machine" />
            <p className="main">Vole Machine Simulator</p>
            <p className="sub">Technology: C++, QT</p>
          </a>
        </div>
        <NavLink className="btton" id='btn' to="/projects">For More</NavLink>

        <div className='title'>Some Certificates</div>
        <hr />
        <div className="cert">
          <div className="card">
            <img src={hcia} alt="hcia" />
            <p className="main">HCIA:AI</p>
            <p className="sub">From: Huawei ICT Academy</p>
          </div>
          <div className="card">
            <img src={dotpy} alt="dotpy" />
            <p className="main">AI Diploma</p>
            <p className="sub">From: DOTPY</p>
          </div>
          <div className="card">
            <img src={alx} alt="alx" />
            <p className="main">AI Carrer essential</p>
            <p className="sub">From: ALX</p>
          </div>
        </div>
        <NavLink className="btton" id='btn' to='/certificats'>For More</NavLink>
      </div>
    </>
  );
}

export default Home;