import React from "react";
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import github from "../assets/icons/github.svg"
import pin from "../assets/icons/pin.svg"
import tie from "../assets/icons/tie.svg"
import image from "../assets/IMG0226.jpeg"


const Sidebar = () => {
  return (
    <div className="sidebar">
        <img src={image} alt="avatar" className="sidebar__avatar"/>
        <div className="sidebar__name">Gurung <span>Purna</span>
        </div>
        <div className="sidebar__item sidebar__title">Fullstack Developer
        </div>
        <a href="!#">
          <div className="sidebar__item">
            <img src={tie} alt="resume" className="sidebar__icon"/>Download Resume

          </div>
        </a>
        <figure className="sidebar__social-icons">
          <a href=" "><img src={facebook} alt="facebook" className="sidebar__icon"/></a>
          <a href=" "><img src={instagram} alt="instagram" className="sidebar__icon"/></a>

        </figure>
        <div className="contact">
          <div className="sidebar__item">
            <a href=" ">
              <img src={github} alt="github"  className="sidebar__icon"/>github
            </a>
            </div>
            <div className="sidebar__location">
              <img src={pin} alt="location" className="sidebar__icon" />
              New York, Queens

            </div>
            <div className="sidebar__item">purnagurung903@gmial.com
            </div>
            <div className="sidebar__item">917-744-3403
            </div>
        </div>
        <div className="sidebar__item sidebar__email">email me</div>
    </div>

  )
}

export default Sidebar;