import React from "react"
import { graphql } from "gatsby"
import { Col, Row } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "./image-template.module.css"
import get from 'lodash.get'

const Template = ({ data, pageContext }) => {
  
    const { images } = get(data, pageContext.project)

  //   const myObj = { user: { firstName: 'Stacky', lastName: 'Overflowy' }, id: 123 };

  //   console.log(get(data, pageContext.project))
  //   console.log(get)

  // console.log(typeof(pageContext.project))

  return (
    <Layout>
      <Row className={styles.Gallery}>

          {/* <Get object={data} path={pageContext.project}>
              {value => <p>It works</p> }
          </Get> */}
        {images.map(image => {
          return (
            <Col key={image.id} className={styles.Image}>
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
