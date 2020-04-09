import React from "react"
import { graphql } from "gatsby"
import { Col, Row } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "./image-template.module.css"
import Get from 'react-lodash'

const Template = ({ data, pageContext }) => {
  
    const { images } = data.contentfulJapan2019

  console.log(pageContext.project)

  return (
    <Layout>
      <Row className={styles.Gallery}>

          {/* <Get object={data} path={pageContext.project}>
              {value => <p>It works</p> }
          </Get> */}
        {images.map(image => {
          return (
            <Col className={styles.Image}>
              <Img alt={image.id} fluid={image.fluid} />
            </Col>
          )
        })}
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulJapan2019(slug: { eq: $slug }) {
      slug
      images {
        fluid(maxWidth: 5000, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      id
    }
  }
`

export default Template
