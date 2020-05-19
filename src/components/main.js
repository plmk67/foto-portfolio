import React, { useReducer } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import styles from "./main.module.css"
import Img from "gatsby-image"
import { FiPlus } from "react-icons/fi"
import { MdExpandMore, MdExpandLess } from "react-icons/md"

const initialState = [
  {
    id: 0,
    toggle: { overflow: "hidden", height: "180px" },
    collapseButton: <MdExpandMore id={0} />,
  },
  {
    id: 1,
    toggle: { overflow: "hidden", height: "180px" },
    collapseButton: <MdExpandMore id={1} />,
  },
  {
    id: 2,
    toggle: { overflow: "hidden", height: "180px" },
    collapseButton: <MdExpandMore id={2} />,
  },
]

const toggleReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLEON":
      return state.map(film => {
        if (film.id === action.id) {
          return {
            ...film,
            toggle: { overflow: "visible", height: "auto" },
            collapseButton: <MdExpandLess id={action.id} />,
          }
        } else {
          return film
        }
      })
    case "TOGGLEOFF":
      return state.map(film => {
        if (film.id === action.id) {
          return {
            ...film,
            toggle: { overflow: "hidden", height: "180px" },
            collapseButton: <MdExpandMore id={action.id} />,
          }
        } else {
          return film
        }
      })
    default:
      return state
  }
}

const Main = () => {
  const [toggleSwitch, dispatch] = useReducer(toggleReducer, initialState)

  const response = useStaticQuery(getImages)
  const data = response.allContentfulJapan2019.edges
  const data1 = response.allContentfulOscarKwongDesign.edges
  const data2 = response.allContentfulNyc2019.edges
  const images = data[0].node.images
  const images1 = data1[0].node.images
  const images2 = data2[0].node.images


  let Toggle = e => {
    if (toggleSwitch[parseInt(e.target.id)] === undefined) {
      console.log("undefined")
      console.log(e.target)
    } else if (
      toggleSwitch[parseInt(e.target.id)].toggle.overflow == "hidden"
    ) {
      dispatch({ type: "TOGGLEON", id: parseInt(e.target.id) })
    } else if (
      toggleSwitch[parseInt(e.target.id)].toggle.overflow == "visible"
    ) {
      dispatch({ type: "TOGGLEOFF", id: parseInt(e.target.id) })

    }
  }


  return (
    <Container className={styles.Grid}>
      
      <Container className={styles.Container}>
        <Row className={styles.Gallery}>
          <Col className={styles.Gallery__Expand}>
            <FiPlus />
          </Col>
          <Col className={styles.Gallery__Title}>
            <p>JAPAN 2019</p>
          </Col>
          <Col className={styles.Gallery__ImageCount}>
            <p>{images.length} images</p>
          </Col>
        </Row>
        <Row style={toggleSwitch[0].toggle} className={styles.Film_Strip}>
          {images.map((image, index) => {
            return (
              <Col key={image.id} className={styles.film}>
                <Img key={image.id} alt={index} fluid={image.fluid} />
              </Col>
            )
          })}
        </Row>
        <Row onClick={e => Toggle(e)} id={0} className={styles.MdExpandMore}>
          {toggleSwitch[0].collapseButton}
        </Row>
      </Container>

      {/* OSCAR KWONG DESIGNS */}

      <Container className={styles.Container}>
        <Row className={styles.Gallery}>
          <Col className={styles.Gallery__Expand}>
            <FiPlus />
          </Col>
          <Col className={styles.Gallery__Title}>
            <p>OSCAR KWONG DESIGN</p>
          </Col>
          <Col className={styles.Gallery__ImageCount}>
            <p>{images1.length} images</p>
          </Col>
        </Row>
        <Row style={toggleSwitch[1].toggle} className={styles.Film_Strip}>
          {images1.map((image, index) => {
            if (image.fluid.aspectRatio > 1) {
              return (
                <Col key={image.id} className={styles.filmLandscape}>
                  <Img key={image.id} alt={index} fluid={image.fluid} />
                </Col>
              )
            } else {
              return (
                <Col key={image.id} className={styles.filmPortrait}>
                  <Img key={image.id} alt={image.id} fluid={image.fluid} />
                </Col>
              )
            }
          })}
        </Row>
        <Row onClick={e => Toggle(e)} id={1} className={styles.MdExpandMore}>
          {toggleSwitch[1].collapseButton}
        </Row>
      </Container>

       {/* NYC 2019 */}
      <Container className={styles.Container}>
        <Row className={styles.Gallery}>
          <Col className={styles.Gallery__Expand}>
            <FiPlus />
          </Col>
          <Col className={styles.Gallery__Title}>
            <p>NYC 2019</p>
          </Col>
          <Col className={styles.Gallery__ImageCount}>
            <p>{images2.length} images</p>
          </Col>
        </Row>
        <Row style={toggleSwitch[2].toggle} className={styles.Film_Strip}>
          {images2.map((image, index) => {
            if (image.fluid.aspectRatio > 1) {
              return (
                <Col key={image.id} className={styles.filmLandscape}>
                  <Img key={image.id} alt={index} fluid={image.fluid} />
                </Col>
              )
            } else {
              return (
                <Col key={image.id} className={styles.filmPortrait}>
                  <Img key={image.id} alt={image.id} fluid={image.fluid} />
                </Col>
              )
            }
          })}
        </Row>
        <Row onClick={e => Toggle(e)} id={2} className={styles.MdExpandMore}>
          {toggleSwitch[2].collapseButton}
        </Row>
      </Container>
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
    allContentfulOscarKwongDesign {
      edges {
        node {
          id
          description
          images {
            fluid(maxWidth: 5000, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulNyc2019 {
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
