import React from "react"
import aboutpic from "../../public/static/images/about_me.jpg"
import aboutStyles from "../../public/styles/about.module.css"
import {Container, Row, Col} from "react-bootstrap"

export default function About() {
  return (
    <Container id="about" className={aboutStyles.container}>
      <div > 
        <Row noGutters={true}>
          <Col lg={8}>
            <img
              className={aboutStyles.img}
              alt="about-me-pic"
              src={aboutpic}
            >
            </img>
          </Col>
          <Col lg={4}>
            <div className={aboutStyles.text}>
              Now residing in the San Francisco Bay Area, I spend a lot of my time coding and dreaming about design.
              Somedays I just want to reach a certain aesthetic, and other day's coding and reading the latest about front-end tech.
              <br />
              <br />
              I have a passion for growing passion for design. 
              Especially design for layouts, typography and user interfaces. 
              <br />
              <br />
              Besides designing and coding, I'm always listening to new bands/artists,
              practicing guitar, taking photos and making coffee every morning.
              <div className={aboutStyles.links}>
                <h2> Professional </h2>
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
              </div>
              <div className={aboutStyles.links}>
              <h2> Personal </h2>
                <a 
                  href={'https://www.instagram.com/m520.n/'}>
                  Instagram
                </a>
                <a 
                  href={'https://open.spotify.com/user/121781429'}>
                  Spotify
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}