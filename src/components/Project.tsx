import React from "react";
import mock01 from '../assets/images/mock01.jpg';
import mock02 from '../assets/images/mock02.jpg';
import mock03 from '../assets/images/mock03.jpg';
import mock04 from '../assets/images/mock04.jpg';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://lynk.id/visionmultimedia" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lynk.id/visionmultimedia" target="_blank" rel="noreferrer"><h2>Vision Multimedia Website</h2></a>
                <p>Developed business website for Vision Multimedia.</p>
            </div>
            <div className="project">
                <a href="https://github.com/thechristdev/Banking-System-Simulation" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/thechristdev/Banking-System-Simulation" target="_blank" rel="noreferrer"><h2>Banking System Simulation</h2></a>
                <p>Developed a simulation of a banking system with Python.</p>
            </div>
            <div className="project">
                <a href="https://sites.google.com/view/kelas-xiic-smansaperjaka/beranda" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sites.google.com/view/kelas-xiic-smansaperjaka/beranda" target="_blank" rel="noreferrer"><h2>Website Kelas XII-C SMAN Perjaka</h2></a>
                <p>Developed a class website for XII-C students at SMAN Perjaka.</p>
            </div>
            <div className="project">
                <a href="https://github.com/thechristdev/Exposthree-System-Guard" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/thechristdev/Exposthree-System-Guard" target="_blank" rel="noreferrer"><h2>Exposthree System Guard</h2></a>
                <p>Developed a security system for monitoring and protecting Minecraft servers.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;