import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import portfolioStyles from "../../public/styles/portfolio.module.css"
import profilePic from "../../public/static/images/profile_pic.png"
import resume from "../../public/static/Resume-10_25_2019.pdf"

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../public/static/images/icons', false,  /\.(png|jpe?g|svg)$/));

export default function Portfolio() {
  return (
    <>
    <div className={portfolioStyles.profileImg}>
      <img
        src={profilePic}
        alt="profile"
      >
      </img>
    </div>
    <div id="introText" className={portfolioStyles.container}>
      <div className={portfolioStyles.textContainer}> 
        <div className={portfolioStyles.name}>  Maxim Chen </div>
        <div className={portfolioStyles.text}>
          <div> Software Engineer with experience in interaction design and ui/ux. </div>
          <div> Based out of the San Francisco Bay Area, driven with a passion for anything design, photography, and music. </div> 
        </div>
        <div className={portfolioStyles.socialLinks}>
          <a href={resume}> Resume </a>
          <h2> Connect with me </h2>
          <div>
            <i class="devicon-behance-plain"></i>
            <a 
              href={'https://www.behance.net/chenmaxim/'}>
              Behance
            </a>
          </div>
          <div>
            <i class="devicon-linkedin-plain"></i>
            <a
              href={'https://www.linkedin.com/in/maximrchen/'}>
              LinkedIn
            </a>
          </div>
          <div>
            <i class="devicon-github-original"></i>
            <a
              href={'https://github.com/chenr-maxim'}>
              Github
            </a>
          </div>
          <div>
            {/* <img
              style={{display: 'inline-block', width:'23px'}}
              src={images[5]}
            >
            </img> */}
            <a 
              // style={{textDecoration: 'none'}} 
              href={'mailto:chenr.maxim@gmail.com'}>
              Email
            </a>
          </div>
        </div>

        <div className={portfolioStyles.skills}>
          <h2> Skills </h2>
          <Container style={{padding: '0 0 0 0'}}
          >
            <Row className={portfolioStyles.skillsIcon}>
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original-wordmark colored"></i>
                <i className="devicon-html5-plain-wordmark"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i class="devicon-java-plain-wordmark"></i>
                <i className="devicon-nodejs-plain-wordmark"></i>
                {/* <i class="devicon-express-original colored"></i> */}
            </Row>
            <Row className={portfolioStyles.skillsIcon}>
              <img
                    id="aftereffects"
                    className={portfolioStyles.icon}
                    src={images[0]}
                  ></img>

                  <img
                    id="illustrator"
                    className={portfolioStyles.icon}
                    src={images[1]}
                  ></img>

                  <img
                    id="photoshop"
                    className={portfolioStyles.icon}
                    src={images[2]}
                  ></img>

                  <img
                    id="adobexd"
                    className={portfolioStyles.icon}
                    src={images[3]}
                  ></img>

                  <img
                    id="figma"
                    style={{height: '45px'}}
                    className={portfolioStyles.icon}
                    src={images[4]}
                  ></img>
            </Row>
          </Container>
        </div>
      </div>
    </div>
    </>
  )
}