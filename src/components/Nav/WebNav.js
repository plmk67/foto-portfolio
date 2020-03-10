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
      <Container md={3} className={styles.Web__Nav}>
        <Row>
          <Col>
            <h4>Analog Catalog</h4>
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
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <FaGithubSquare />
              </a>
            </li>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MobileNav
