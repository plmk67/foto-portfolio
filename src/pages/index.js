import React from "react"
import { Col } from "reactstrap"
import Layout from "../components/layout"
import Main from "../components/main"
import styles from "./index.module.css"
import MediaQuery from "react-responsive"


class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Col className={styles.Content}>
          <MediaQuery minWidth={813}>
            <Main />
          </MediaQuery>
          <MediaQuery maxWidth={812}>
            <p> this will be a list of photos</p>
          </MediaQuery>
        </Col>
      </Layout>
    )
  }
}

export default IndexPage
