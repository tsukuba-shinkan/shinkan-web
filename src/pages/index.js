import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      sports: allShinkanWebOrg(filter: { activityType: { eq: "体育系" } }) {
        edges {
          node {
            posterImageUrls
            name
            primaryKey
          }
        }
      }
      culture: allShinkanWebOrg(filter: { activityType: { eq: "文化系" } }) {
        edges {
          node {
            posterImageUrls
            name
            primaryKey
          }
        }
      }
      art: allShinkanWebOrg(filter: { activityType: { eq: "芸術系" } }) {
        edges {
          node {
            posterImageUrls
            name
            primaryKey
          }
        }
      }
      others: allShinkanWebOrg(filter: { activityType: { eq: "その他" } }) {
        edges {
          node {
            posterImageUrls
            name
            primaryKey
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="ホーム" />
      <div className="categories sports">
        <h2>体育系</h2>
        <div>
          <ul className="scrollList">
            {data.sports.edges.map(({ node }) => {
              return (
                <li className="scrollItem">
                  <Link to={"/org/" + node.primaryKey}>
                    <img
                      src={node.posterImageUrls[0]}
                      alt={node.name}
                      loading="lazy"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="categories culture">
        <h2>文化系</h2>
        <div>
          <ul className="scrollList">
            {data.culture.edges.map(({ node }) => {
              return (
                <li className="scrollItem">
                  <Link to={"/org/" + node.primaryKey}>
                    <img
                      src={node.posterImageUrls[0]}
                      alt={node.name}
                      loading="lazy"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="categories art">
        <h2>芸術系</h2>
        <div>
          <ul className={"scrollList"}>
            {data.art.edges.map(({ node }) => {
              return (
                <li className="scrollItem">
                  <Link to={"/org/" + node.primaryKey}>
                    <img
                      src={node.posterImageUrls[0]}
                      alt={node.name}
                      loading="lazy"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="categories others">
        <h2>その他</h2>
        <div>
          <ul className="scrollList">
            {data.others.edges.map(({ node }) => {
              return (
                <li className="scrollItem">
                  <Link to={"/org/" + node.primaryKey}>
                    <img
                      src={node.posterImageUrls[0]}
                      alt={node.name}
                      loading="lazy"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
