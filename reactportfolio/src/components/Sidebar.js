import React from "react";
import linkedin from "../assets/icons/linkedin.svg"
import instagram from "../assets/icons/instagram.svg"
import github from "../assets/icons/github.svg"
import pin from "../assets/icons/pin.svg"
import tie from "../assets/icons/tie.svg"
import image from "../assets/Myphoto.png"
import resume from "../assets/Resume.pdf"


const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:purnagurung903@gmail.com")
  }
  return (
    <div className="sidebar">
        <img src={image} alt="avatar" className="sidebar__avatar"/>
        <div className="sidebar__name">Gurung <span>Purna</span>
        </div>
        <div className="sidebar__item sidebar__title">Fullstack Web Developer
        </div>
        <a href={resume} download="Resume.pdf">
          <div className="sidebar__item sidebar__resume">
            <img src={tie} alt="resume" className="sidebar__icon"/>Download Resume

          </div>
        </a>
        <figure className="sidebar__social-icons my-2">
          <a href="https://www.linkedin.com/in/purna-gurung-74a0a7118/"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-3"/></a>
          <a href="https:/www.instsgram.com/purna_pgurung"><img src={instagram} alt="instagram" className="sidebar__icon"/></a>

        </figure>
        <div className="sidebar__contact">
          <div className="sidebar__item sidebar__github">
            <a href="https://github.com/purnagurung903">
              <img src={github} alt="github"  className="sidebar__icon mr-3"/>github
            </a>
            </div>
            <div className="sidebar__location">
              <img src={pin} alt="location" className="sidebar__icon mr-3" />
              New York, Queens

            </div>
            <div className="sidebar__item">purnagurung903@gmial.com
            </div>
            <div className="sidebar__item">917-744-3403
            </div>
        </div>
        <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
    </div>

  )
}

export default Sidebar;