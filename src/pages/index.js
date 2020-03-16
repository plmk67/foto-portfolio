import React, { Component } from "react"
import MobileNav from "../components/Nav/MobileNav"
import WebNav from "../components/Nav/WebNav"
import Layout from "../components/layout"
import Content from "../components/Content/Content"
import { Row, Col } from "reactstrap"

import styles from "./index.module.css"

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions.bind(this))
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    let nav

    if (this.state.width > 776) {
      nav = (
        <Col className={styles.Nav}>
          <WebNav />
        </Col>
      )
    } else {
      nav = (
        <Col>
          <MobileNav />
        </Col>
      )
    }

    return (
      <Layout classname={styles.Layout}>
        <Row className={styles.Main_Content}>
          {nav}
          <Col className={styles.Content}>
            <Content />
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default IndexPage
