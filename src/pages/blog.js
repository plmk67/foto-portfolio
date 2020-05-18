import React from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import styles from "./blog.module.css"

const Blog = () => (
  <Layout>
    <Container>
      <Row>
        <Col>
          <h1>This will be the blog post</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sit.
            Error fugit ipsam praesentium reprehenderit illum animi modi nemo
            voluptate quaerat dolorem possimus ducimus quasi doloribus delectus,
            unde odit molestiae?
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Blog
