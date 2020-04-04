import React from "react"
import Img from "gatsby-image"
import styles from "./Thumbnails.module.css"

const Thumbnails = ({ images }) => {

  return (
    <>
      {images.map((image, index) => {
        return (
          <Img
            className={styles.Thumbnails_Img}
            key={index}
            id={image.id}
            fluid={image.fluid}
          />
        )
      })}
    </>
  )
}

export default Thumbnails
