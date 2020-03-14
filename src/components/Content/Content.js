import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./Content.module.css"
import Img from "gatsby-image"

const Content = () => {
  const response = useStaticQuery(getImages)
  const data = response.allContentfulFotoPortfolio.edges

  return (
    <Container className={styles.Content}>
      <Col className={styles.Content__Gallery}>
        {/* <img src="https://firebasestorage.googleapis.com/v0/b/foto-portfoliio.appspot.com/o/d000034.JPG?alt=media&token=f59482cf-e3fd-444a-8ea4-b4711afaba16" /> */}
        <Img fluid={data[0].node.image.fluid} />
      </Col>

      <Col className={styles.Content__Info}>
        <Row className={styles.Content__Pagination}>
          <a href="">PREV</a> / <a href="">NEXT</a>
        </Row>
        <Row className={styles.Content__Show_Thumbnails}>
          <a href="">SHOW THUMBNAILS</a>
        </Row>
      </Col>
    </Container>
  )
}

const getImages = graphql`
  query {
    allContentfulFotoPortfolio {
      edges {
        node {
          id
          image {
            fluid(maxWidth: 6000, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Content
