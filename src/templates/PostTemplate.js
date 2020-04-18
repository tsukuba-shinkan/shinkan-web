import React, { useState } from "react"
import { graphql } from "gatsby"

// react-image-lightbox
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fluid700 from "../components/Fluid700"
import Fluid200 from "../components/Fluid200"
import "./PostTemplate.scss"

const Post = ({ data }) => {
  const { org } = data

  // Lightbox
  const lightboxImages = [...org.otherImageUrls]
  const [isLightboxOpen, setLightboxOpenState] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  return (
    <Layout>
      <SEO title={org.name} description={org.activityIntroduce.slice(0, 200)} />
      <div className="post-template">
        <div className="post-template__container">
          <section // ページ左側: ビジュアルカラム
            className="post-template__visual"
          >
            <div className="post-template__visual__container">
              <div // ポスター
                className="post-template__visual__poster-wrap"
              >
                <div //スマホ版最上部ヘッダー
                  className="post-template__visual__header"
                >
                  <h1 className="name">{org.name}</h1>
                  <InfoNav {...org} className="info" />
                </div>
                <figure //ポスター画像
                  className="post-template__visual__poster"
                >
                  <Fluid700 url={org.posterImageUrls[0]} alt="" />
                </figure>
              </div>
              <ul // その他画像リスト
                className="post-template__visual__image-list"
              >
                {org.otherImageUrls.map((url, i) =>
                  i < 5 ? (
                    <li
                      key={url}
                      className="item"
                      onClick={() => {
                        setLightboxIndex(lightboxImages.indexOf(url))
                        setLightboxOpenState(true)
                      }}
                    >
                      <Fluid200 url={url} alt="" />
                      {org.otherImageUrls.length >= 5 && i === 4 ? (
                        <span className="overflow-length-overlay">
                          <span>+{org.otherImageUrls.length - 5 + 1}</span>
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </section>
          <section // ページ右側: テキストカラム
            className="post-template__text"
          >
            <header // 情報ヘッダー
              className="post-template__text__header"
            >
              <h1 className="name">{org.name}</h1>
              <InfoNav {...org} className="info" />
            </header>
            <main // 団体紹介文
              className="post-template__text__introduce"
            >
              {org.activityIntroduce
                .split("\n")
                .filter(p => p.match(/\S+/))
                .map((p, i) => (
                  <p key={`${i}-${p}`}>{p}</p>
                ))}
            </main>
            <footer className="post-template__text__footer">
              <InfoNav {...org} />
            </footer>
          </section>
        </div>
        {isLightboxOpen ? (
          <Lightbox // 画像モーダル
            mainSrc={lightboxImages[lightboxIndex]}
            nextSrc={
              lightboxImages[(lightboxIndex + 1) % lightboxImages.length]
            }
            prevSrc={
              lightboxImages[
                (lightboxIndex + lightboxImages.length - 1) %
                  lightboxImages.length
              ]
            }
            onCloseRequest={() => setLightboxOpenState(false)}
            onMoveNextRequest={() =>
              setLightboxIndex((lightboxIndex + 1) % lightboxImages.length)
            }
            onMovePrevRequest={() =>
              setLightboxIndex(
                (lightboxIndex + lightboxImages.length - 1) %
                  lightboxImages.length
              )
            }
          />
        ) : (
          ""
        )}
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

/**
 * インフォメーションバー
 * @param {string} type
 * @param {string} activityType
 * @param {string} twitter
 * @param {string} instagram
 * @param {string} website
 */
const InfoNav = ({
  type,
  activityType,
  twitter,
  instagram,
  website,
  ...props
}) => {
  const isTwitterAvailable = twitter && twitter !== ""
  const isInstagramAvailable = instagram && instagram !== ""
  const isSocialAvailable = isTwitterAvailable || isInstagramAvailable
  const isWebsiteAvailable = website && website !== ""
  const isExternalAvailable = isSocialAvailable || isWebsiteAvailable
  return (
    <aside // Infoナビゲーション
      className={["post-template__info-nav", props.className].join(" ")}
    >
      <span className="type">
        {type}・{activityType}
      </span>
      <span className="separator"></span>
      {isExternalAvailable ? (
        <span // 外部リンク
          className="external"
        >
          {isSocialAvailable ? (
            <span // ソーシャルリンク
              className="social"
            >
              {isTwitterAvailable ? (
                <a // Twitter
                  href={`https://twitter.com/${twitter}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="icon icon--twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              ) : (
                ""
              )}
              {isInstagramAvailable ? (
                <a // Instagram
                  href={`https://www.instagram.com/${instagram}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="icon icon--instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              ) : (
                ""
              )}
            </span>
          ) : (
            ""
          )}
          {isWebsiteAvailable ? (
            <a // ウェブサイト
              className="website"
              href={website}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>
                {website.replace(/^https?:\/\/([^/]+).*$/, (_, domain) =>
                  domain.length > 20
                    ? domain.slice(0, 10) + "..." + domain.slice(-10)
                    : domain
                )}
              </span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          ) : (
            ""
          )}
        </span>
      ) : (
        ""
      )}
    </aside>
  )
}
