import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import styles from "./MobileNav.module.css"

class MobileNav extends Component {
  constructor() {
    super()
    this.state = {
      toggle: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState(prevState => ({ toggle: !prevState.toggle }))
  }

  render() {
    return (
      <Container className={styles.Mobile__Nav}>
          {this.state.toggle ? (
            <Row className={styles.Nav__menu}>
              <a href="">Japan 2019</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Store</a>
            </Row>
          ) : null}
          <Row className={styles.Nav}>
            <Col md={6} className={styles.Nav___logo}>
              ANALOG CATALOG
            </Col>
            <Col md={6} className={styles.Nav___menu}>
              <a onClick={this.handleToggle}>Menu</a>
            </Col>
          </Row>
      </Container>
    )
  }
}

export default MobileNav
