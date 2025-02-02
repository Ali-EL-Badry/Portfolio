import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Header.css';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current location object
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); // This effect will run every time the location (route) changes

  return (
    <>
      <header className={isSticky ? "sticky" : ""}>
        <NavLink to="/" exact className="Logo">Aly EL-Badry</NavLink>
        <div className="nav">
          <div className='nav-path'>
            <NavLink to="/" exact activeClassName="active">About</NavLink>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
            <NavLink to="/certificats" activeClassName="active">Certificates</NavLink>
            <NavLink to="/FeedBack" activeClassName="active">FeedBack</NavLink>
          </div>
          <div className="nav-icons">
            <NavLink to="https://github.com/Ali-EL-Badry" className="github" target="_blank">
              <FaGithub size={40} />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/aly-el-badry/" className="linkedin" target="_blank">
              <FaLinkedin size={40} />
            </NavLink>
          </div>
        </div>
        <button className="menu-button" onClick={toggleSidebar}>☰</button>
      </header>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleSidebar}>✕</button>
        <nav className="sidebar-nav">
          <NavLink to="/" exact activeClassName="active" onClick={toggleSidebar}>About</NavLink>
          <NavLink to="/projects" activeClassName="active" onClick={toggleSidebar}>Projects</NavLink>
          <NavLink to="/certificats" activeClassName="active" onClick={toggleSidebar}>Certificates</NavLink>
          <NavLink to="/FeedBack" activeClassName="active" onClick={toggleSidebar}>FeedBack</NavLink>
          <div className="nav-icons">
            <NavLink to="https://github.com/Ali-EL-Badry" className="github" target="_blank">
              <FaGithub size={30} />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/aly-el-badry/" className="linkedin" target="_blank">
              <FaLinkedin size={30} />
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
