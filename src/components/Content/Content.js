import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./Content.module.css"
import Img from "gatsby-image"

const Content = () => {
  const response = useStaticQuery(getImages)
  const data = response.allContentfulJapan2019.edges
  const images = data[0].node.images

  return (
    <Container className={styles.Content}>
      <Col className={styles.Content__Gallery}>
        {images.map((image, index) => {
          return (
            <Img
              className={styles.Content__Gallery_Img}
              fluid={image.fluid}
              alt={index}
            />
          )
        })}
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

export const getImages = graphql`
  query {
    allContentfulJapan2019 {
      edges {
        node {
          id
          images {
            fluid(maxWidth: 5000, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Content
