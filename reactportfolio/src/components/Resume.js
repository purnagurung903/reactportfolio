import React from "react";
import react from "../assets/icons/react.svg"
import Bar from "./Bar";
import Footer from "./footer/Footer";

const languages = [
  {
    icon: react,
    name: "Javascript",
    level: "60"
  },
  {
    icon: react,
    name: "HTML & CSS",
    level: "80"
  },
  {
    icon: react,
    name: "Node js",
    level: "60"
  },
  {
    icon: react,
    name: "React",
    level: "60"
  },
  {
    icon: react,
    name: "MongoDB",
    level: "70"
  },
  {
    icon: react,
    name: "MySQL",
    level: "70"
  },
  {
    icon: react,
    name: "Express js",
    level: "60"
  },

]
const tools = [
  {
    icon: react,
    name: "Git",
    level: "50"
  },
  {
    icon: react,
    name: "GitHub",
    level: "60"
  },
  {
    icon: react,
    name: "Heroku",
    level: "45"
  },
]

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
         <h4 className="resume-card__heading">
           Education
         </h4>
         <div className="resume-card__body">
         <h5 className="resume-card__title">
         Fullstack MERN Developer
         </h5>
         <p className="resume-card__name">
            Columbia Engineering Bootcamp[2020-2021]
         </p>
         <p className="resume-card__details">
          I am currently pursuing in FullStack web Developer from Columbia Engineering Bootcamp.
         </p>
         </div>
       </div>
       <div className="col-lg-6 resume-card">
         <h4 className="resume-card__heading">
           Experience
         </h4>
         <div className="resume-card__body">
         <h5 className="resume-card__title">
         Projects
         </h5>
         <p className="resume-card__name">
            Columbia Engineering Bootcamp[2020-2021]
         </p>
         <p className="resume-card__details">
          I have good experience in working with groups and solo projects of fullstack MERN web development you can find my projects from my github.
         </p>
         </div>
      </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">
          Languages & Framework
          </h5>
          <div className="resume-language__body mt-3">
            {
              languages.map(Language =>
                <Bar value={Language} />
                )
            }
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">
          Tools & Softwares
          </h5>
          <div className="resume-language__body mt-3">
            {
              tools.map(tool=><Bar value={tool} />)
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Resume;