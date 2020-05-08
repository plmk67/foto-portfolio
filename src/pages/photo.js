import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Col } from "reactstrap"
import styles from "./photo.module.css"

const photo = ({ location }) => {

  return (
    <Layout>
      <Col className={styles.Gallery}>
        <Col className={styles.Image}>
          <Link to={`/${location.state.prevPath}`}>
            <Img alt={location.state.id} fluid={location.state.fluid} />
          </Link>
        </Col>
      </Col>
    </Layout>
  )
}

export default photo
