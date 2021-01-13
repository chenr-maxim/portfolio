import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import navbarStyles from "../../public/styles/navbar.module.css"

export default class SideNavigation extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleSetActive = this.handleSetActive.bind(this);
  // }

  render() {
    return (
      <div className={navbarStyles.navBar}>
        <div className={navbarStyles.navitem}>
          <Link 
            activeClass={navbarStyles.active}
            to="projects"
            spy={true}
            smooth={true}
          >
            Projects
          </Link>
        </div>
        <div className={navbarStyles.navitem}>
          <Link 
              activeClass={navbarStyles.active}
              to="work"
              // offset={-25}
              spy={true}
              smooth={true}
            >
              Work
            </Link>
        </div>
        <div className={navbarStyles.navitem}>
        <Link 
            activeClass={navbarStyles.active}
            to="about"
            spy={true}
            smooth={true}
          >
            About
          </Link>
        </div>
      </div>
    );
  }
}