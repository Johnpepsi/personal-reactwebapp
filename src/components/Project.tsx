import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock01.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="http://www.goosecreekbernese.ca/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.goosecreekbernese.ca/" target="_blank" rel="noreferrer"><h2>Client Web Application</h2></a>
                <p>Developed a static web application for a client that includes contact information, forms and service details, that was built in PHP for a backend communication. </p>
            </div>
            <div className="project">
                <a href="https://github.com/Johnpepsi/WarCardUI" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Johnpepsi/WarCardUI" target="_blank" rel="noreferrer"><h2>War Card Game</h2></a>
                <p>Developed this game as a practice. This is a card game built in Swift, it is an ideal programming language for creating card games that are fast, reliable, and visually appealing.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/Johnpepsi/my-memeKit" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Johnpepsi/my-memeKit" target="_blank" rel="noreferrer"><h2>Meme Kit</h2></a>
                <p>This Funny Moment Memes Project that I created for fun by using tools such as NPM and DOM. This Project sharpened my skills to work with Document Object Model. DOM allows JavaScript to interact with, and manipulate, the content, structure, and style of the web page</p>
            </div>
            <div className="project">
                <a href="https://github.com/Johnpepsi/QR-imageproject" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Johnpepsi/QR-imageproject/" target="_blank" rel="noreferrer"><h2>Scanner QR Github</h2></a>
                <p>My first developed QR-Image project where I implemented URL link to my GitHub. I NPM module, JavaScript, Git bash scripting. By implementing the right command tools, I successfully made QR to prompt my personal website.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>First Portfolio Website</h2></a>
                <p>Here is my very own portfolio website which contains my personal and contact information. The website is hosted online cloud platform hosting service where I utilized vercel for my all personal stuff.</p>
            </div>
            <div className="project">
                <a href="https://johnpalaganas-simongame.netlify.app/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://johnpalaganas-simongame.netlify.app/" target="_blank" rel="noreferrer"><h2>Simon Game Challenge</h2></a>
                <p>I learned to use calling the Properties, using array in such a clean code, also by importing JSX file in the right path of components.</p>
            </div>
            <div className="project">
                <a href="https://padayon.netlify.app/#home" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://padayon.netlify.app/#home" target="_blank" rel="noreferrer"><h2>Ecommerce Project</h2></a>
                <p>Tech Stack: React, Node.js, Express, MongoDB. This project is a full-stack e-commerce application built with React for the front end and Node.js/Express for the back end.</p>
            </div>
            <div className="project">
                <a href="https://jpal-pokemonapi.netlify.app/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jpal-pokemonapi.netlify.app/" target="_blank" rel="noreferrer"><h2>Pokemon Search Api</h2></a>
                <p>This project was meant to use for obtaining to learn API for utilizing fetch Data through JavaScript. Tools that I used in this project such was DOM, JS, APis.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Johnpepsi/iOsCalculator" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Johnpepsi/iOsCalculator" target="_blank" rel="noreferrer"><h2>iOs Calculator</h2></a>
                <p>Developed and released an iOS mobile application using Swift and Xcode that functions as a fully-featured calculator.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;