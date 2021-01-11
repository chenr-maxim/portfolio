import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import navbarStyles from "../../public/styles/navbar.module.css"


export default function SideNavigation() {
    return (
    <div className={navbarStyles.navBar}>
      <div>
        <Link 
          to="temp"
          smooth={true}
        >
          Projects
        </Link>
      </div>
      <div>
        <Link 
          to="temp"
          smooth={true}
        >
          Work
        </Link>
      </div>
      <div>
        <Link 
          to="temp"
          smooth={true}
        >
          About
        </Link>
      </div>
    </div>
    );
}