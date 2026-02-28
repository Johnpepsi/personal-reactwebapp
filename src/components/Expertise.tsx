import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faAws, faWindows } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faServer } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "APIs",
    "JavaScript",
    "HTML5",
    "CSS3",
    "PHP",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "GitLab",
    "Jenkins",
    "Programming",
];

const labelsThird = [
    "Powershell",
    "Microsoft Entra",
    "Azure AD",
    "MS Exchange",
    "File Servers",
    "Active Directory",
    "Server Management",
    "Proxmox",
    "Hyper-V",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Developed web applications using React and Flask, following structured development practices including requirement gathering, development, testing, and deployment. Maintained both frontend and backend components in a Linux server environment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Deployed and managed Docker containers on Ubuntu servers to host internal tools and web applications. Implemented bind mounts, networking configuration, and restart policies to ensure service persistence and reliability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faWindows} size="3x"/>
                    <h3>System Administration</h3>
                    <p>Administered Windows Servers and Linux in virtualized environments (Proxmox and VirtualBox). Managed Active Directory domain services, DHCP configuration, user account management, and system updates to maintain secure and stable infrastructure.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
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