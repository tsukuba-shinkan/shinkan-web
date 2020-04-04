/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "sanitize.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="site-footer">
        <div id="footerContainer">
          <div className="row">
            <div>
              <Link to="/about">このサイトについて</Link>
            </div>
            <div>
              <a
                href="http://www.tsukuba.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?id=1ReaOXbZz2mHy2CKZ7cQONvot6vp3S02m"
                  alt="筑波大学"
                  id="footerLogo"
                />
              </a>
            </div>
          </div>
          <div>
            <p id="copyright">
              © 2020 &nbsp;
              <a
                href="https://www.stb.tsukuba.ac.jp/~webgaku/"
                target="_blank"
                rel="noopener noreferrer"
              >
                筑波大学Webページ学生委員会
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
