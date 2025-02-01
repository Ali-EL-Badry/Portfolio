import React from 'react'
import hcia from './HCIA.jpg';
import java from './java course.jpg';
import aice from './alx.png';
import ecpc from './ecpc.png';
import dotpy from './dotpy.jpeg';
import clean from './clean.png';
import oop from './oop.png';
import hc from './html.png';
import py from './pyrhon.png';
import pan from './pandas.png';
import machine from './machine.png';
import data from './data.png';
import sql from './sql.jpg';
const Cert = () =>{
    return(
        <>
            <div className="title first">Certificates</div>
            <hr />
            <div className="cards">
                <div className="ca">
                    <img src={hcia} alt="hci" />
                    <p className="main">HCIA:AI</p>
                    <p className="sub">From: Huawei ICT Academy</p>
                </div>
                <div className="ca">
                    <img src={java} alt="Java" />
                    <p className="main">Java Course</p>
                    <p className="sub">From: Huawei ICT Academy</p>
                </div>
                <div  className="ca">
                    <img src={aice} alt="AICE" />
                    <p className="main">AI Career Essential</p>
                    <p className="sub">From: Alx</p>
                </div>
                <div className="ca">
                    <img src={ecpc} alt="ECPC" />
                    <p className="main">ECPC Competition</p>
                    <p className="sub">Technology: ECPC</p>
                </div>
                <div className="ca">
                    <img src={dotpy} alt="DOtpy" />
                    <p className="main">AI Deploma</p>
                    <p className="sub">From: Dotpy</p>
                </div>
                <div className="ca">
                    <img src={clean} alt="clean" />
                    <p className="main">Clean Code</p>
                    <p className="sub">From: ITI </p>
                </div>
                <div className="ca">
                    <img src={oop} alt="OOP" />
                    <p className="main">Mastering OOP</p>
                    <p className="sub">From: ITI </p>
                    </div>
                <div className="ca">
                    <img src={hc} alt="HTML-CSS" />
                    <p className="main">HTML and CSS</p>
                    <p className="sub">From: ITI</p>
                </div>
                <div className="ca">
                    <img src={py} alt="python" />
                    <p className="main">Python</p>
                    <p className="sub">From: Kaggle</p>
                </div>
                <div className="ca">
                    <img src={pan} alt="Pandas" />
                    <p className="main">Pandas</p>
                    <p className="sub">From: Kaggle</p>
                </div>
                <div className="ca">
                    <img src={machine} alt="Intro to Machine Learing" />
                    <p className="main">Intro to machine learning</p>
                    <p className="sub">From: Kaggle</p>
                </div>
                <div className="ca">
                    <img src={data} alt="Data Cleaning" />
                    <p className="main">Data Cleaning</p>
                    <p className="sub">From: Kaggle</p>
                </div>
                <div className="ca">
                    <img src={sql} alt="SQL" />
                    <p className="main">SQl course</p>
                    <p className="sub">From: Udemy</p>
                </div>
            </div>
        </>
    )
}

export default Cert;