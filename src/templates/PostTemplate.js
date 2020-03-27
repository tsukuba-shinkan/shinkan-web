import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const Post = ({ data }) => {
  const orgdata = data.shinkanWebOrg
  return (
    <Layout>
      <SEO title={orgdata.name} />
      <h2>{orgdata.name}</h2>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($primaryKey: String!) {
    shinkanWebOrg(primaryKey: { eq: $primaryKey }) {
      activityIntroduce
      activityType
      id
      imageUrls
      instagram
      name
      otherImageUrls
      pdfUrl
      posterImageUrls
      primaryKey
      twitter
      type
      website
    }
  }
`
