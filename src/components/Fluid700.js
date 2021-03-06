import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Fluid700({ url, alt }) {
  const allImages = useStaticQuery(graphql`
    query c {
      allImageSharp {
        nodes {
          id
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
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
