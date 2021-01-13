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
              Besides designing and coding, I'm always listening and discovering new music, bands/artists,
              practicing guitar and making coffee every morning.

            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}