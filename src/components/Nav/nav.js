import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Container, Row, Col } from "reactstrap"
import styles from "./nav.module.css"

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      toggle: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState(prevState => ({ toggle: !prevState.toggle }))
    console.log(this.state.toggle)
  }

  render() {
    return (
      <Container>
        {this.state.toggle ? (
          <Row className={styles.Nav__menu}>
            <a href="">About Me</a>
            <a href="">Tokyo 2019</a>
            <a href="">Contact</a>
            <a href="">Store</a>
          </Row>
        ) : null}
        <Row className={styles.Nav}>
          <Col md={6} className={styles.Nav___logo}>
            VINCENT YIP
          </Col>
          <Col md={6} className={styles.Nav___menu}>
            <a onClick={this.handleToggle}>Menu</a>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Nav
