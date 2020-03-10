import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import styles from "./Content.module.css"

class Content extends Component {
  render() {
    return (
      <Col md={9} className={styles.Content}>
        <p>Test</p>
      </Col>
    )
  }
}

export default Content
