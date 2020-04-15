/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { Container, Col, Row } from "reactstrap"
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
          <MediaQuery minWidth={812}>
            <WebNav />
          </MediaQuery>
          <MediaQuery maxWidth={812}>
            <MobileNav />
          </MediaQuery>
        </Col>
        <Col className={styles.Content}> {children}</Col>
      </Container>
    </div>
  )
}

export default Layout
