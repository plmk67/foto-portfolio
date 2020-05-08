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
      <Col className={styles.Mobile__Nav}>
        {this.state.toggle ? (
          <Row className={styles.Nav__menu}>
            <Col className={styles.Nav__MainNav}>
              <a href="">about</a>
              <a href="">contact</a>
              <a href="">store</a>
            </Col>
          </Row>
        ) : null}
        <Row className={styles.Nav}>
          <Col className={styles.Nav___logo}>VINCENT YIP</Col>
          <Col className={styles.Nav___menu}>
            <a onClick={this.handleToggle}>Menu</a>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default MobileNav
