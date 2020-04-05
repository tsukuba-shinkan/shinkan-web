import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImageImg from "gatsby-image"

export default function Img({ url }) {
  const allImages = useStaticQuery(graphql`
    query a {
      allImageSharp {
        nodes {
          id
          fluid(maxWidth: 600) {
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
  return <GatsbyImageImg fluid={imageNode.fluid} />
}
