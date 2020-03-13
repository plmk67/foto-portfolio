import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import styles from "./WebNav.module.css"
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa"

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
      <Container className={styles.Web__Nav}>
        <Col className={styles.Web__Nav__Logo}>
          Vincent Yip
        </Col>
        <Col className={styles.Web__Nav__MainNav}>
          <li>portrait</li>
          <li>travel</li>
          <li>stills</li>
        </Col>
        <Col className={styles.Web__Nav__SecondaryNav}>
          <li>about</li>
          <li>contact</li>
          <li>store</li>
        </Col>
        <Col className={styles.Web__Nav__SocialMedia}>
          <li>
            <a href="https://www.instagram.com/vingt100yip/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yipvincent/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/plmk67">
              <FaGithubSquare />
            </a>
          </li>
        </Col>
      </Container>
    )
  }
}

export default MobileNav
