import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./Content.module.css"

import Thumbnails from "../Thumbnails/Thumbnails"

const Content = () => {

  const response = useStaticQuery(getImages)
  const data = response.allContentfulJapan2019.edges
  const images = data[0].node.images

  return (
    <Container className={styles.Content}>
      <Col className={styles.Content__Gallery}>
        <Thumbnails images={images}/>
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

// {images.map((image, index) => {
//   return (
//     <Img
//       className={styles.Thumbnails_Img}
//       key={index}
//       id={index}
//       fluid={image.fluid}
//     />
//   )
// })}