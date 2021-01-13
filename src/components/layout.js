import React from "react"
import SideNavigation from "../components/sideNav"
import LayoutStyles from "../../public/styles/layout.module.css"
import {Container, Row, Col} from "react-bootstrap"

export default function Layout({ children }) {
  return (
    <>
      <Container fluid>
        <Row noGutters={true}>
          <Col>
          </Col>
          <Col lg={8}>
            <div className={LayoutStyles.singlecolumn}>
              {children}
            </div>
          </Col>
          <Col>
            <SideNavigation/>
          </Col>
        </Row>
      </Container>

    </>
  )
}