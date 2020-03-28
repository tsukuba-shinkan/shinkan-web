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
      <div className="row orgdata">
        <div className="half">
          <div className="container">
            <img src={orgdata.posterImageUrls[0]} alt={orgdata.name} />
          </div>
        </div>
        <div className="half">
          <div className="container">
            <h2>{orgdata.name}</h2>
            {orgdata.website !== "" && (
              <>
                <span className="socialLink">
                  <img
                    src="https://icongr.am/entypo/link.svg?size=20&color={hex}"
                    alt="link"
                  />
                  <a href={orgdata.website}>{orgdata.website}</a>
                </span>
                <br />
              </>
            )}
            {orgdata.twitter !== "" && (
              <>
                <span className="socialLink">
                  <img
                    src="https://icongr.am/entypo/twitter.svg?size=20&color={hex}"
                    alt="link"
                  />
                  <a href={"https://twitter.com/" + orgdata.twitter}>
                    {orgdata.twitter}
                  </a>
                </span>
                &nbsp;
              </>
            )}
            {orgdata.instagram !== "" && (
              <>
                <span className="socialLink">
                  <img
                    src="https://icongr.am/entypo/instagram.svg?size=20&color={hex}"
                    alt="link"
                  />
                  <a href={"https://instagram.com/" + orgdata.instagram}>
                    {orgdata.instagram}
                  </a>
                </span>
              </>
            )}
            <h3>活動内容紹介</h3>
            <p>{orgdata.activityIntroduce} </p>
          </div>
        </div>
      </div>
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
