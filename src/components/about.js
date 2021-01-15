import React from "react"
import aboutpic from "../../static/images/about_me.jpg"
import aboutStyles from "../../static/styles/about.module.css"
import {Container, Row, Col} from "react-bootstrap"

export default function About() {
  return (
    <Container fluid id="about" className={aboutStyles.container}>
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
              Now residing in the San Francisco Bay Area, I spend a lot of my time coding and thinking about design.
              Somedays I just want to craft a certain aesthetic, and other days I spend coding, learning, reading the latest about front-end tech.
              <br />
              <br />
              I have a growing passion for design, especially for layouts, typography and user interfaces. 
              <br />
              <br />
              Besides designing and coding, I'm always listening to new bands/artists,
              practicing guitar, taking photos and making coffee every morning.
              <br />
              <br />
              Check out some of my photos below.
              <div className={aboutStyles.links}>
                <h2> Professional </h2>
                <div>
                  <i className="devicon-behance-plain"></i>
                  <a 
                    href={'https://www.behance.net/chenmaxim/'}>
                    Behance
                  </a>
                </div>
                <div>
                  <i className="devicon-linkedin-plain"></i>
                  <a
                    href={'https://www.linkedin.com/in/maximrchen/'}>
                    LinkedIn
                  </a>
                </div>
                <div>
                  <i className="devicon-github-original"></i>
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
    </Container>
  );
}