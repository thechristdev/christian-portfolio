import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "AI-Assisted Development",
    "CustomTkinter",
];

const labelsSecond = [
    "Java",
    "AI-Assisted Development",
];

const labelsThird = [
    "Microsoft Excel",
    "Microsoft Word",
    "Microsoft PowerPoint",

];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Python with AI Assisted Development</h3>
                    <p>Experienced in using Python together with AI-assisted development (vibe coding) to rapidly prototype, build, debug, and optimize applications while maintaining code quality and functionality.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Java with AI Assisted Development</h3>
                    <p>Experienced in using Java together with AI-assisted development (vibe coding) to rapidly prototype, build, debug, and optimize applications while maintaining code quality and functionality.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrosoft} size="3x"/>
                    <h3>Microsoft Office</h3>
                    <p>Basic proficiency in Microsoft Office, including Excel, Word, and PowerPoint, for creating documents, organizing and analyzing data, and preparing professional presentations to support academic and administrative tasks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Key skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;