import React, { useState } from "react"
import { graphql } from "gatsby"
import { Col, Row } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "./image-template.module.css"
import get from "lodash.get"

const Template = ({ data, pageContext }) => {
  const { images } = get(data, pageContext.project)

  const [modal, setModal] = useState(false)
  const [index, setIndex] = useState(0)

  const toggle = e => {
    setModal(!modal)

    if (isNaN(e.target.alt) === false) {
      setIndex(parseInt(e.target.alt))
    }

    console.log("current index " + index)
  }

  const previous = () => {
    if (index <= 0) {
      setIndex(0)
      console.log("first image")
    } else {
      setIndex(index - 1)
      console.log(index)
    }
  }

  const next = () => {
    if (index === images.length - 1) {
      setIndex(images.length - 1)
    } else {
      setIndex(index + 1)
    }
  }

  let display = ""

  if (modal === true) {
    display = (
      <Col className={styles.Layout_Modal}>
        <Row className={styles.Modal}>
          <Row className={styles.Navigation}>
            <Col onClick={previous} className={styles.Navigation__Previous} />
            <Col onClick={toggle} className={styles.Navigation__Gallery} />
            <Col onClick={next} className={styles.Navigation__Next} />
          </Row>
          <Row onClick={toggle} className={styles.main_image}>
            <Img alt={images[index].id} fluid={images[index].fluid} />
          </Row>
        </Row>
      </Col>
    )
  }

  return (
    <div>
      <Layout>
        <Col className={styles.Layout}>
          {display}
          <Row className={styles.Gallery}>
            {images.map((image, index) => {
              return (
                <Col onClick={toggle} key={image.id} className={styles.Image}>
                  <Img alt={index} fluid={image.fluid} />
                </Col>
              )
            })}
          </Row>
        </Col>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulJapan2019(slug: { eq: $slug }) {
      slug
      images {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      id
    }
  }
`

export default Template
