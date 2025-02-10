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

const Project = () =>{
    return(
        <>
            <div className="pro">
                <div className="title first">Data Science Project</div>
                <hr />
                <div className="cards">
                    <a href="https://github.com/Ali-EL-Badry/Pothole-Detection" className="ca">
                        <img src={pothole} alt="pothole Detection" />
                        <p className="main">Pothole-Detection</p>
                        <p className="sub">Technology: YOLO</p>
                    </a>
                    <a href="https://github.com/Ali-EL-Badry/Machine-learning-Algorithm" className="ca">
                        <img src= {machine} alt="Machine Learning Algo." />
                        <p className="main">Machine Learning Algo.</p>
                        <p className="sub">Technology: Supervised and Unsupervised Algo.</p>
                    </a>
                </div>
                    <div className="kaggle-section">
                        <p>If you want to see more trained models and notebooks, visit my</p>
                        <a href="https://www.kaggle.com/alyelbadry" className="kaggle-button" target="_blank">Kaggle Account</a>
                    </div>
                <div className="title">Web Development</div>
                <hr />
                <div className="cards">
                    <a href="https://github.com/Ali-EL-Badry/Star-Union-Tasks/tree/main/Task_5" className="ca">
                        <img src={fasion} alt="Fasion Corner" />
                        <p className="main">Fasion Corner</p>
                        <p className="sub">Technology: React, HTML, Bootstrap, CSS</p>
                    </a>
                    <a href="https://github.com/Ali-EL-Badry/Star-Union-Tasks/tree/main/Task%202" className="ca">
                        <img src={house} alt="Home" />
                        <p className="main">My House</p>
                        <p className="sub">Technology: Html,css,js,bootstrap.</p>
                    </a>
                    <a href="https://github.com/Ali-EL-Badry/Star-Union-Tasks/tree/main/Task%201" className="ca">
                        <img src={elearn} alt="e-learn" />
                        <p className="main">E-Learn Template</p>
                        <p className="sub">Technology: Html, css</p>
                    </a>
                </div>
                <div className="title">Other Fields Project</div>
                <hr/>
                <div className="cards">
                    <a href="https://github.com/Ali-EL-Badry/Vole_Machine_Simulator" className="ca">
                        <img src={vole} alt="vole machine" />
                        <p className="main">Vole Machine Simulator</p>
                        <p className="sub">Technology: C++, QT</p>
                    </a>
                    <a href="https://github.com/Ali-EL-Badry/Pisc-modifier" className="ca">
                        <img src={pho} alt="PiscArt." />
                        <p className="main">piscArt</p>
                        <p className="sub">Technology: C++.</p>
                    </a>
                    <a href="https://github.com/Ali-EL-Badry/X-Game-O" className="ca">
                        <img src={xo} alt="X-Games-o" />
                        <p className="main">X-Games-o</p>
                        <p className="sub">Technology: C++</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Project;