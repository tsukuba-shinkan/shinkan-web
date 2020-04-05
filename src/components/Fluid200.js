import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Fluid200({ url, alt }) {
  const allImages = useStaticQuery(graphql`
    query d {
      allImageSharp {
        nodes {
          id
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
          parent {
            ... on File {
              url
            }
          }
        }
      }
    }
  `)
  const imageNode = allImages.allImageSharp.nodes.find(
    e => e.parent.url === url
  )
  return <Img fluid={imageNode.fluid} alt={alt} />
}
