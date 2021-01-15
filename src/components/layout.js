import React from "react"
import SideNavigation from "../components/sideNav"
import LayoutStyles from "../../static/styles/layout.module.css"
import PhotoItems from "../components/photoitems"
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/styles/reset.css'
import '../../static/styles/global.css'


export default function Layout({ children }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.8.2/devicon.min.css"></link>
      <Container fluid className={LayoutStyles.singlecolumn}>
        <Row noGutters={true}>
          <Col>
          </Col>
          <Col lg={8}>
            <div>
              {children}
            </div>
          </Col>
          <Col>
            <SideNavigation/>
          </Col>
        </Row>
        <Row>
          <PhotoItems />
        </Row>
      </Container>

    </>
  )
}