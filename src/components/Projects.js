import React from 'react'
import './projects.css'
import { projectData } from './ProjectData'
import{BsFillRecordCircleFill} from 'react-icons/bs';
import{AiFillGithub} from 'react-icons/ai';
const Projects = () => {
  return (
    <div id="projects">
        <h2>My Projects</h2>
        <div className="projects" >
        {projectData.map((element, index)=>{
          return(
          <div className="container" key={element}>
            <img src={projectData[index].image} alt="img" />
            <div className="description">{projectData[index].description}</div>
            <div className="buttons">
              <a id="github" href={projectData[index].github} target="_blank" rel="noreferrer"><AiFillGithub/> Github</a>
              {projectData[index].liveView!=="" && <a id="liveview" href={projectData[index].liveView} target="_blank" rel="noreferrer"><BsFillRecordCircleFill/> Live View</a>}
            </div>
            
          </div>
        
          )
        })}
        </div>

          
    </div>
  )
}

export default Projects