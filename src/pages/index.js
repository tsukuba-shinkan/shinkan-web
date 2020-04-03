import React, { useState } from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import "./index.scss"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [lastTouchedItem, setLastTouchedItem] = useState(null)
  const { orgs } = useStaticQuery(graphql`
    {
      orgs: allShinkanWebOrg {
        edges {
          node {
            posterImageUrls
            name
            primaryKey
            activityType
            activityIntroduce
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="ホーム" />
      <div className="page--index">
        <ul className="org-list">
          {orgs.edges.map(({ node: org }) => (
            <li className="org-list__item" key={org.primaryKey}>
              <Link to={`/org/${org.primaryKey}`}>
                <figure className="org-list__item__poster">
                  <img src={org.posterImageUrls[0]} alt="" />
                  <figcaption>
                    <h2 className="org-list__item__name">{org.name}</h2>
                    <p className="org-list__item__activity-introduce">
                      {org.activityIntroduce.substr(0, 100) + "..."}
                    </p>
                  </figcaption>
                </figure>
              </Link>

              <div // スマホ用
                className="org-list__item__sp-caption"
                onClick={() => {
                  if (lastTouchedItem === org.primaryKey)
                    navigate(`/org/${org.primaryKey}`)
                  setLastTouchedItem(org.primaryKey)
                }}
              >
                <div className="org-list__item__sp-caption__name">
                  {org.name}
                </div>
                <div className="org-list__item__sp-caption__activity-introduce">
                  {org.activityIntroduce.substr(0, 100) + "..."}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
