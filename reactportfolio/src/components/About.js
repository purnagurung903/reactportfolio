import React from "react";
import algo from "..//assets/icons/algo.svg"
import computer from "..//assets/icons/computer.svg"
import repair from "..//assets/icons/repair.svg"



import Skillcard from "./Skillcard";

const skills = [
  {
    icon: computer,
    title: "Frontend Development ",
    about: "I can build a beautiful and scalable web page using HTML, CSS, React.js"
  },
  {
    icon: repair,
    title: "Backend Development ",
    about: "Handle database, server, api using MYSQL, MongoDB, Express.js, node.js"
  },
  
  {
    icon: algo,
    title: "Competitive Coder",
    about: "I am a problem solver"
  },
  
]
const About = () => {
  return (
    <div className="about">
      <h6 className="about__intro">
        I describe myself as someone who's persistent, a quick learner and loves problem solving.Aspiring web developer and designer with 2 year(s) of educational experience; Graduated from Columbia Engineering Bootcamp as a FullStack web developer. Determined and motivated in pursuing and exceeding in creating web designs and development. Interested in obtaining an entry-level position in the web design or development field.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">
          What I offer
       </h6>
        <div className="row">
          {
            skills.map(skill =>
              <Skillcard skill={skill} />
            )
          },
          
        </div>
        
      </div>
      
    </div>
  )
}

export default About;