import React from 'react'
import { ProjectList } from '../helpers/ProjectList';
import { useParams } from 'react-router-dom'
import "../styles/ProjectDisplay.css";
import GithubIcon from "@mui/icons-material/GitHub"
function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id];

    return(
        <div className='project' style={{marginTop:'7rem'}}>
            <h1>{project.name}</h1>
            <img src={project.image}/>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <h4 className='decrip'>{project.desc}</h4>
            <a href={project.url} target='_blank' rel='noopener noreferrer' className='final' style={{marginBottom:'9rem'}}>
                <GithubIcon />
            </a>
        </div>
    );
}

export default ProjectDisplay;
