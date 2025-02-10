import './Home.css';
import React from 'react'
import videoBg from "./assests/vi.mp4"; 
import Profile from './assests/lol.jpg';
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleDown, FaArrowRight } from "react-icons/fa";
import pothole from './assests/pothole detection (1).png';
import fasion from './assests/fasion.jpg';
import vole from './assests/vole.png';
import hcia from './assests/HCIA.jpg';
import dotpy from './assests/dotpy.jpeg';
import alx from './assests/alx.png';
import cairo from './assests/Cairo university.webp';
import depi from './assests/depi_logo.jpg';
import star from './assests/star.jpg';
import event from "./assests/event.jpg";
import h from './assests/huawei.jpg';

const Home = () =>{
  const handleScroll = () => {
    window.scrollBy({ top: 690, behavior: "smooth" }); 
  };
  const activities = [
    {
      id: 1,
      image: star,
      title: "Star Union",
      memberTitle: "AI Member",
      description: "Contributed to AI-Workshop, developed machine learning models, and collaborated on real-world applications. and mentoring within the student activity",
    },
    {
      id: 2,
      image: event,
      title: "Graduation Party",
      memberTitle: "Event Organizer",
      description: "Coordinated and managed the graduation party, overseeing planning, logistics, and execution to ensure a seamless and memorable event.",
    },
  ];
  
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
            <a href="https://drive.google.com/file/d/1j1OgHYgD21k0HwfD-f5C0zm7-Iw0eXry/view?usp=sharing" className="btn">Download CV</a>
          </div>
        </div>

        <div className="arrow">
            <div className="down-arrow">
              <button className="arr" onClick={handleScroll}>
                <FaAngleDoubleDown className="aa" />
              </button>
            </div>
        </div>

      </div>
      
      <div className='title' id="about">About Aly El-Badry</div>
      <hr />
      <div className="about">
        <div className='about-content'>
          <div className="about-text">
            <p className="main-text">A second-year student at Cairo University's Faculty of Computer Science and Artificial Intelligence, Aly El-Badry is a dedicated Data Scientist and Full-Stack Developer with a strong passion for advancing toward a career as an AI Engineer.</p>
            <p className="subtext">
              <div className="sub">
                <div className="arrow-container">
                  <FaArrowRight className="arrow-icon" />
                </div>
                <p className="factors">Experienced freelancer on platforms such as Upwork and 5amsat, offering expertise in Data Science and web development.</p>
              </div>
              <div className="sub">
                <div className="arrow-container">
                  <FaArrowRight className="arrow-icon" />
                </div>
                <p className="factors">Currently contributing as a Data Scientist in the Digital Egypt Pioneers Initiative (DEPI), guided by the strategic vision of AMIT.</p>
              </div>
              <div className="sub">
                <div className="arrow-container">
                  <FaArrowRight className="arrow-icon" />
                </div>
                <p className="factors">Former Student Union member with a proven track record in organizing large-scale events, including the Cairo University Student Graduation Party.</p>
              </div>
              <div className="sub">
                <div className="arrow-container">
                  <FaArrowRight className="arrow-icon" />
                </div>
                <p className="factors">Active AI member in Star Union and a recognized Dataset expert on Kaggle, showcasing a commitment to innovation and collaboration in the field of artificial intelligence.</p>
              </div>
            </p>
          </div>
          <img src={Profile} alt="profile-img" className='My-Image' />
        </div>
      </div>



      <div className="title">Experience</div>
      <hr />
      <div className="exp">
        <div className="sec">
          <div className="comp-head">
            <div className="comp-name">
              <h2>Digital Egypt Pioneers Initiative-DEPI</h2>
              <p className="job">Data Scientist - Internship</p>
            </div>
            <p>October 2024 - Present</p>
          </div>
          <div className='college-content com'>
            <hr />
            <div className="headlist">Key Takeaways:</div>
            <ul>
              <li>Developed and deployed machine learning models for real-world applications.</li>
              <li>Performed data cleaning, preprocessing, and feature engineering for improved model accuracy.</li>
              <li>Worked with large datasets to extract meaningful insights and build predictive analytics solutions.</li>
              <li>Collaborated with a team of professionals to solve data-driven challenges.</li>
              <li>Enhanced proficiency in Python, TensorFlow, and data visualization tools.</li>
            </ul>
          </div>
        </div>
        <img src={depi} alt="" />
      </div>
      <div className="exp">
        <div className="sec">
          <div className="comp-head">
            <div className="comp-name">
              <h2>Huawei ICT Academy</h2>
              <p className="job">Data Scientist - Internship</p>
            </div>
            <p>July 2024 - August 2024</p>
          </div>
          <div className='college-content com'>
            <hr />
            <div className="headlist">Key Takeaways:</div>
            <ul>
            <li>Developed and deployed machine learning models for real-world applications.</li>
            <li>Conducted data cleaning, preprocessing, and feature engineering to enhance model accuracy.</li>
            <li>Analyzed large datasets to extract meaningful insights and build predictive analytics solutions.</li>
            <li>Collaborated with a team of professionals to solve complex data-driven challenges.</li>
            <li>Strengthened expertise in Python, TensorFlow, and data visualization tools.</li>
          </ul>
          </div>
        </div>
        <img src={h} alt="" />
      </div>

      <div className="title">Education</div>
      <hr />
      <div className="about">
        <div className='about-content'>
          <img src={cairo} alt="Cairo university" />
          <div className="college-details">
            <div className="college-head">
              <h2>Cairo University, Computer Science & Artificial Intelligence</h2>
              <p>October 2023 - Present</p>
            </div>
            <div className="college-content">
              <div className="main">
                Kickstart your journey in programming with a strong foundation in essential concepts. 
                This program emphasizes problem-solving, time management, and teamwork, providing an 
                optimal environment for beginners to excel in the field of programming.
              </div>
              <hr />
              <div className="headlist">Key Takeaways:</div>
              <ul>
                <li>Develop teamwork and project management skills</li>
                <li>Gain proficiency in programming languages such as C++, Java, and Python</li>
                <li>Master Object-Oriented Programming (OOP), data structures, and algorithms</li>
                <li>Explore web development and database management</li>
                <li>Build a solid foundation in your preferred specialization</li>
              </ul>
            </div>
          </div>
        </div> 
      </div>

      <div className="title">Studnet Activities</div>
      <hr />
      <div className="activity">
      {activities.map((activity) => (
        <div className="bar" key={activity.id}>
          <img src={activity.image} alt={activity.title} className="activity-img" />
          <div className="activity-head">{activity.title}</div>
          <div className="member-title">{activity.memberTitle}</div>
          <div className="activity-content">{activity.description}</div>
        </div>
      ))}
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
        <NavLink className="btton " id='blue' to="/projects">For More</NavLink>

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
          <NavLink className="btton" id='black' to='/certificats'>For More</NavLink>
      </div>
    </>
  );
}

export default Home;