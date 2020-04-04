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

const Layout = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  let nav

  if (width > 776) {
    nav = <WebNav />
  } else {
    nav = <MobileNav />
  }

  return (
    <div className={styles.Layout}>
      <Header />
      <Container className={styles.Container}>
        <Col className={styles.Nav}>{nav}</Col>
        <Col className={styles.Content}> {children}</Col>
      </Container>
    </div>
  )
}

export default Layout
