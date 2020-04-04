import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Main from "./main"

import Test from "../components/test"
import styles from "./index.module.css"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Col className={styles.Content}>
          <Router>
            <Main path="/" />
            <Test path="test" />
          </Router>
        </Col>
      </Layout>
    )
  }
}

export default IndexPage
