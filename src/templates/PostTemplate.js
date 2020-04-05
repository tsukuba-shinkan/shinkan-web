import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./PostTemplate.scss"

const Post = ({ data }) => {
  const { org } = data
  return (
    <Layout>
      <SEO title={org.name} />
      <div className="post-template">
        <div className="post-template__container">
          <section className="post-template__visual">
            <div className="post-template__visual__container">
              <div className="post-template__visual__poster-wrap">
                <div className="post-template__visual__header">
                  <h1 className="name">{org.name}</h1>
                  <aside className="info post-template__info-bar">
                    <span className="type">
                      {org.type}・{org.activityType}
                    </span>
                    <span className="external">
                      <span className="social"></span>
                      <a className="website" href={org.website}>
                        {org.website.replace(/^https?:\/\//, "")}
                      </a>
                    </span>
                  </aside>
                </div>
                <figure className="post-template__visual__poster">
                  <img src={org.posterImageUrls[0]} alt="" />
                </figure>
              </div>
              <ul className="post-template__visual__image-list">
                {org.otherImageUrls.map(url => (
                  <li key={url} className="item">
                    <img src={url} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="post-template__text">
            <header className="post-template__text__header">
              <h1 className="name">{org.name}</h1>
              <aside className="info post-template__info-bar">
                <span className="type">
                  {org.type}・{org.activityType}
                </span>
                <span className="external">
                  <span className="social"></span>
                  <a className="website" href={org.website}>
                    {org.website.replace(/^https?:\/\//, "")}
                  </a>
                </span>
              </aside>
            </header>
            <main className="post-template__text__introduce">
              {org.activityIntroduce
                .split("\n")
                .filter(p => p.match(/\S+/))
                .map((p, i) => (
                  <p key={`${i}-${p}`}>{p}</p>
                ))}
            </main>
            <footer className="post-template__text__footer">
              <aside className="info post-template__info-bar">
                <span className="type">
                  {org.type}・{org.activityType}
                </span>
                <span className="external">
                  <span className="social"></span>
                  <a className="website" href={org.website}>
                    {org.website.replace(/^https?:\/\//, "")}
                  </a>
                </span>
              </aside>
            </footer>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($primaryKey: String!) {
    org: shinkanWebOrg(primaryKey: { eq: $primaryKey }) {
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
