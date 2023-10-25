import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import GithubIcon from "@mui/icons-material/GitHub"
import PersonIcon from '@mui/icons-material/Person';
import '../styles/Home.css'
function Home() {
    return(<div className='home'>
        <div className='about'>
            <h2>Hi, my name is Sujal</h2>
            <div className='prompt'>
                <p>A tech ethusiast with a passion for learning and creating</p>
                <a href="https://www.linkedin.com/in/sujal-singh-4a0b49223/">
                    <LinkedInIcon />
                </a>
                <EmailIcon />
                <a href="https://github.com/SUJALSINGH7473">
                <GithubIcon />
                </a>
                <a href="https://leetcode.com/Sujal_Singh/">
                <PersonIcon />
                </a>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>DSA(Problem Solving)</h2>
                    <span>400+ questions on <a href="/">Leetcode</a></span><br />
                    <span>3 star on Leetcode with 1640+ max rating</span><br/>
                    <span>Specialist on <a href="">CodeStudio</a></span>
                </li>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span> HTML, CSS, JavaScript, React, Vue.js, Angular, Webpack, Sass, Git, and Netlify/Vercel.</span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>C++, C, Java, Javascript, Python, Typescript</span>
                </li>
            </ol>
        </div>
    </div>
    );
}

export default Home
