import React, { useState } from "react";
import data_projects from "./data/projects_data"
import Footer from "./footer/Footer";
import ProjectCard from "./projectCard";
const Projects = () => {
  const [projects, setProjects] = useState(data_projects)
  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter(project => project.category.includes(name))
    setProjects(new_array)
  }
  return (
    <div className="container projects">
      <div className="projects__navbar">
         <div onClick={() => setProjects(data_projects)}>All</div>
         <div onClick={() => handleFilterCategory("MySQL")}>MySQL</div>
         <div onClick={() => handleFilterCategory("MongoDB")}>MongoDB</div>
         <div onClick={() => handleFilterCategory("javascript")}>Javascript</div>
         <div onClick={() => handleFilterCategory("Node")}>Node</div>
      </div>
      <div className="row">
          {
             projects.map(project => 
              <ProjectCard key={project.name} project={project} />)
          }
      </div>
      
    </div>
  )
}

export default Projects;