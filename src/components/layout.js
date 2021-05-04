import React from "react"
import Helmet from "react-helmet"
import SideNavigation from "../components/sideNav"
import Footer from "../components/footer"
import PhotoItems from "../components/photoitems"
import favicon from "../../static/images/favicon.png"
import {Container, Row, Col} from "react-bootstrap"
import LayoutStyles from "../../static/styles/layout.module.css"
import '../../static/styles/reset.css'
import '../../static/styles/global.css'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.8.2/devicon.min.css"></link>
      </Helmet>
      <Container fluid className={LayoutStyles.singlecolumn}>
        <Row noGutters={true}>
          <Col lg={2}>
          </Col>
          <Col md={12} lg={8} >
            <div>
              {children}
            </div>
          </Col>
          <Col lg={2}>
            <SideNavigation/>
          </Col>
        </Row>
        <Row>
          {/* <PhotoItems /> */}
          <Footer />
        </Row>
      </Container>

    </>
  )
}