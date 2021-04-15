import React from "react";
import algo from "..//assets/icons/algo.svg"
import computer from "..//assets/icons/computer.svg"
import repair from "..//assets/icons/repair.svg"
import Footer from "./footer/Footer";


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
        I describe myself as someone who's persistent, a quick learner and loves problem solving.
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
      <Footer />
    </div>
  )
}

export default About;