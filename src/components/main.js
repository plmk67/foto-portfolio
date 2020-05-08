import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Col } from "reactstrap"
import styles from "./main.module.css"

const Main = () => {
  const response = useStaticQuery(getImages)
  const data = response.allContentfulJapan2019.edges
  const heroImage = data[0].node.images[0]

  return (
    <Col className={styles.Col}>
      <Link to="/project/japan%202019">
        <Img alt={heroImage.id} fluid={heroImage.fluid} />
      </Link>
    </Col>
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

export default Main
