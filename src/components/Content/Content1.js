import React, { useState } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./Content.module.css"
import Img from "gatsby-image"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const Content = () => {
  const [count, setCount] = useState(0)

  const response = useStaticQuery(getImages)
  const data = response.allContentfulJapan2019.edges
  const images = data[0].node.images

  const idFinder = e => {
    console.log(e.target.alt)
  }

  const nextImage = () => {
    if (count < images.length - 1) {
      setCount(count + 1)
    } else {
      setCount(9)
    }
  }

  const thumbnails = e => {
    e.preventDefault()
    console.log(e.target.alt)
  }

  const prevImage = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(0)
    }
  }

  return (
    <Container className={styles.Container}>
      <Row className={styles.Content}>
        <div className={styles.prev} onClick={() => prevImage()} />
        {/* <div className={styles.thumbnail} onClick={thumbnails} /> */}
        <div className={styles.next} onClick={() => nextImage()} />

        <Col className={styles.Content__Gallery}>
          {/* {images.map(image => {
          return (
            <div onClick={idFinder} className={styles.Content__Gallery_div}>
              <Img
                className={styles.Content__Thumbnails_Img}
                alt={image.id}
                fluid={image.fluid}
              />
            </div>
          )
        })} */}

          <div onClick={thumbnails} className={styles.Content__Gallery_div}>
            <Img
              className={styles.Content__Thumbnails_Img}
              alt={images[Object.values({ count })].id}
              fluid={images[Object.values({ count })].fluid}
            />
          </div>
        </Col>
      </Row>

      <Col className={styles.Content__Info}>
        <Row className={styles.Content__Pagination}>
          {/* <a href="">PREV</a> / <a href="">NEXT</a> */}
        </Row>
        <Row className={styles.Content__Show_Thumbnails}>
          {/* <a  href="">SHOW THUMBNAILS </a> */}
        </Row>
      </Col>
    </Container>
  )
}

// (id: "ccd3cbdb-9fcd-537b-aea2-5a9e04bb388f")

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
