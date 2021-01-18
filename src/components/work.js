import React from "react"
import {Container, Row, Col, Accordion, Card} from "react-bootstrap"
import workStyles from "../../static/styles/work.module.css"
import timeline from "../../static/images/timeline_fixed.png"

export default function Work() {
  return (
    <Container>
       {/* <Accordion>
         <Card>

         </Card>
       </Accordion> */}
      <div id="work" className={workStyles.container}>
        <Row noGutters={true}>
            <Col lg={0} className={workStyles.timeline} >
              <img
                className={workStyles.imgSize}
                src={timeline}
                alt="work-timeline"
              >
              </img>
            </Col>
            <Col lg={10}>
              <div className={workStyles.textContainer}>
                <div className={workStyles.title}>
                  Software Engineer at Change Healthcare
                </div>
                <div className={workStyles.date}>
                  November 2018 - April 2020
                </div>
                <div className={workStyles.description}>
                  Helped in building a new user interface and experience for their payment platform checkout experience in React and React-Native. 
                  Worked on integrating Apple Pay JS API into Change Healthcare's Next Generation payment platform. 
                  Integrated, and maintained current Change Healthcare APIs into their Next Generation platform.
                </div>
              </div>
              <div className={workStyles.textContainer}>
                <div className={workStyles.title}>
                  UI/UX Web Developer at Change Healthcare
                </div>
                <div className={workStyles.date}>
                July 2017 - September 2017
                </div>
                <div className={workStyles.description}>
                  Worked with a team of developers and UI/UX designers for Change Healthcare’s web printing service portal. 
                  Assisted in debugging, scaffolding and prototyping frameworks for future projects. 
                  On the UX team assisted researching user flows and taking user feed-back on current Change Healthcare's services.
                </div>
              </div>
              <div className={workStyles.textContainer}>
                <div className={workStyles.title}>
                  Web Developer Intern at Tang Capital
                </div>
                <div className={workStyles.date}>
                July 2016 - September 2016
                </div>
                <div className={workStyles.description}>
                  Worked on a team of software engineers on the iOS app, PianoNow. 
                  Developed parts of PianoNow's front-end and update Tang Capital software 
                  for data analysis and management. 
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
  )
}