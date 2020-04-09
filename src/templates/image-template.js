import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ImageTemplate = ({ data }) => {
//   const { id } = data.contentfulJapan2019

//   console.log(id)
  return (
    <Layout>
      {/* <h1>{id}</h1> */}

      <p>Hello Pictures</p>
    </Layout>
  )
}

// export const query = graphql`
//   query($id: String!) {
//     contentfulJapan2019(slug: { eq: $id }) {
//       slug
//       images {
//         fluid {
//           src
//         }
//       }
//       id
//     }
//   }
// `

export default ImageTemplate
