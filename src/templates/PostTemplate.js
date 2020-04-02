import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import BigImg from "../components/BigImg"
import OtherImg from "../components/OtherImg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
  const orgdata = data.shinkanWebOrg
  console.log(orgdata.otherImageUrls)

  return (
    <Layout>
      <SEO title={orgdata.name} />
      <div className="row orgdata">
        <div className="half">
          <div className="container">
            <BigImg url={orgdata.posterImageUrls[0]} />
          </div>
        </div>
        <div className="half">
          <div className="container">
            <h2>{orgdata.name}</h2>
            <hr />
            {orgdata.website !== "" && (
              <>
                <span className="socialLink">
                  <img
                    src="https://icongr.am/entypo/link.svg?size=20&amp;color=aaaaaa"
                    alt="link"
                  />
                  <a
                    href={orgdata.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {orgdata.website}
                  </a>
                </span>
                <br />
              </>
            )}
            {orgdata.twitter !== "" && (
              <>
                <span className="socialLink">
                  <img
                    src="https://icongr.am/entypo/twitter.svg?size=20&amp;color=aaaaaa"
                    alt="link"
                  />
                  <a
                    href={"https://twitter.com/" + orgdata.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                    src="https://icongr.am/entypo/instagram.svg?size=20&amp;color=aaaaaa"
                    alt="link"
                  />
                  <a
                    href={"https://instagram.com/" + orgdata.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {orgdata.instagram}
                  </a>
                </span>
              </>
            )}
            <div className="activityIntroduce">
              {orgdata.activityIntroduce
                .split("\n")
                .filter(s => s.match(/\S+/))
                .map(s => (
                  <p>{s}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
      {orgdata.otherImageUrls.length >= 1 && (
        <>
          <div className="otherImages">
            {orgdata.otherImageUrls.map(otherImageUrl => {
              return <OtherImg url={otherImageUrl} />
            })}
          </div>
        </>
      )}
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
