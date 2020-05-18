import React from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import styles from "./about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const response = useStaticQuery(profileImg)
  const profile = response.allContentfulAbout.nodes

  return (
    <Layout>
      <Container>
        <Row className={styles.About}>
          <Col className={styles.Profile_Picture}>
            <Img alt={profile[0].id} fluid={profile[0].image[0].fluid} />
          </Col>
          <Col className={styles.Description}>
            <p>
              Born in Hong Kong. Raised in Montreal. Currently in Toronto.
              <br />
              <br />
              He loves photography, design, and tech. He also built this website.
              <br />
              <br />
              Available for freelance photography and web development work.
              <br />
              <br />
              He's pretty good at:
              <br />
              <br />
              <li>React</li>
              <li>API</li>
              <li>Node.js</li>
              <li>Gatsby</li>
              <li>GraphQL</li>
              <li>Contentful CMS</li>
              <li>Shopify Integration & Operations</li>
              <br />
              You can reach to him by yip.vincent@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

const profileImg = graphql`
  query {
    allContentfulAbout(
      filter: { id: { eq: "e4343d9a-2733-5d5f-acaf-b05a06af337c" } }
    ) {
      nodes {
        id
        image {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
    }
  }
`

export default About
