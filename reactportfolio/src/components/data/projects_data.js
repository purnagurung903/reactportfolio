import burger from "../../assets/projects_images/burger.png"
import notetaker from "../../assets/projects_images/notetaker.png"
import Quarentine from "../../assets/projects_images/Quarentine.png"
import quickTravel from "../../assets/projects_images/quickTravel.png"
import Timetracker from "../../assets/projects_images/Timetracker.png"
import weatherapp from "../../assets/projects_images/weatherapp.png"

const data_projects = [
  {
    name:"Quarantinie",
    image:Quarentine,
    deployed_url:"https://melissakinsey.github.io/Quarantinis/",
    github_url:"https://github.com/melissakinsey/Quarantinis",
    category: ["javascript"]
  },
  {
    name:"Weather App",
    image:weatherapp,
    deployed_url:"https://purnagurung903.github.io/weatherApp/",
    github_url:"https://github.com/purnagurung903/weatherApp.git",
    category: ["javascript"]
  },
  {
    name:"Workday Schedule",
    image:Timetracker,
    deployed_url:"https://purnagurung903.github.io/WorkDayScheduler/.",
    github_url:"https://github.com/purnagurung903/WorkDayScheduler.git",
    category: ["javascript"]
  },
  {
    name:"Note Taker",
    image:notetaker,
    deployed_url:"https://aqueous-peak-19906.herokuapp.com/",
    github_url:"https://github.com/purnagurung903/NoteTaker.git",
    category: ["Node"]
  },
  {
    name:"Quick_Travel",
    image:quickTravel,
    deployed_url:"https://thawing-peak-69215.herokuapp.com/",
    github_url:"https://github.com/lindseybowen/Quick_Travel.git",
    category: ["Node"]
  },
  {
    name:"Burger App",
    image:burger,
    deployed_url:"https://arcane-shelf-93832.herokuapp.com/",
    github_url:"https://github.com/purnagurung903/burger.git",
    category: ["MySQL"]
  },
]
export default data_projects;