import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import workStyles from "../../public/styles/work.module.css"
import timeline from "../../public/static/images/timeline.png"

export default function Work() {
  return (
    <Container id="work">
      <div className={workStyles.container}>
        Work
        <Row noGutters={true}>
            <Col xs={2}>
              <img
                className={workStyles.imgSize}
                src={timeline}
                alt="work-timeline"
              >
              </img>
            </Col>
            <Col xs={10}>
              <div className={workStyles.textContainer}>
                <div className={workStyles.title}>
                  Software Engineer at Change Healthcare
                </div>
                <div className={workStyles.date}>
                  November 2018 - April 2020
                </div>
                <div className={workStyles.description}>
                  Worked on integrating Apple Pay JavaScript API into the Next Generation payment platform. 
                  As well as building a new UI for their payment platform checkout experience in React and React-Native. 
                  And created and integrated Change Healthcare APIs and their functionality into 
                  their Change Healthcare's Next Generation platform.
                </div>
              </div>
              <div style={{marginTop: '140px'}}className={workStyles.textContainer}>
                <div className={workStyles.title}>
                  UI/UX Web Developer at Change Healthcare
                </div>
                <div className={workStyles.date}>
                July 2017 - September 2017
                </div>
                <div className={workStyles.description}>
                  Worked with a team of developers and UI/UX designers for Change Healthcare’s web printing service portal. 
                  Assisted in debugging, scaffolding and prototyping frameworks. 
                  On the UX team assisted with researching current user flows and take userfeedback.
                </div>
              </div>
              <div style={{marginTop: '158px'}} className={workStyles.textContainer}>
                <div className={workStyles.title}>
                  Web Developer Intern at Tang Capital
                </div>
                <div className={workStyles.date}>
                July 2016 - September 2016
                </div>
                <div className={workStyles.description}>
                  Worked on a team of software engineers on the iOS app, PianoNow. 
                  Helped developed pieces of the frontend and develop in-company applications 
                  for data analysis and management. 
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
  )
}