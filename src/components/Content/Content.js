import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import styles from "./Content.module.css"

class Content extends Component {
  render() {
    return (
      <Container className={styles.Content}>
        <Col className={styles.Content__Gallery}>
          <img
            src="https://media3.s-nbcnews.com/j/newscms/2020_07/3231366/200214-fat-cat-santa-fe-animal-shelter-2012-ac-531p_a7225f67ed4aa791d5f42e3fd2b044ea.fit-2000w.jpg"
            alt="meow"
          />
        </Col>
        <Col className={styles.Content__Info}>
          <Row className={styles.Content__Pagination}>
            <a ref="">PREV</a> / <a ref="">NEXT</a>
          </Row>
          <Row>
            <a ref="">SHOW THUMBNAILS</a>
          </Row>
        </Col>
      </Container>
    )
  }
}

export default Content
