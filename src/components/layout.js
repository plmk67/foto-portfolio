import React from 'react'
import { Container, Col } from "reactstrap"
import Header from "../components/Header/Header"
import WebNav from "../components/Nav/WebNav"
import MobileNav from "../components/Nav/MobileNav"
import styles from "./layout.module.css"
import MediaQuery from "react-responsive"

const Layout = ({ children }) => {
  return (
    
    <div className={styles.Layout}>
      <Header />
      <Container className={styles.Container}>
        <Col className={styles.Nav}>
          <MediaQuery minWidth={813}>
            <WebNav />
          </MediaQuery>
          <MediaQuery maxWidth={812}>
            <MobileNav />
          </MediaQuery>
        </Col>

       {children}
      </Container>
    </div>
  )
}

export default Layout
