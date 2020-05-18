import React, { Component } from "react"
import { Link } from "gatsby"
import { Container, Col } from "reactstrap"
import styles from "./WebNav.module.css"
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa"

class WebNav extends Component {
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
          <Link to="/">vincent yip</Link>
        </Col>
        <Col className={styles.Web__Nav__SecondaryNav}>
          <li>
            <Link to="/about/">about</Link>
          </li>
          <li>contact</li>
          <li>
            <Link to="/blog/">blog</Link>
          </li>
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

export default WebNav
