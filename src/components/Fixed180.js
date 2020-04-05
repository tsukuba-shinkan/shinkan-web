import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Fluid180({ url, alt }) {
  const allImages = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          id
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
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
  return <Img fixed={imageNode.fixed} alt={alt} />
}
