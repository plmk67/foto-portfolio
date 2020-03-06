import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Container, Row, Col } from "reactstrap"
import styles from './header.module.css'

const Nav = ({ siteTitle }) => (
  <Container>
    <Row className={styles.Nav}>
      <Col md={6} className={styles.Nav___logo}>VINCENT YIP</Col>
      <Col md={6} className={styles.Nav___menu}>Menu</Col>
    </Row>
  </Container>
)
//for checking property type during development phase
Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
