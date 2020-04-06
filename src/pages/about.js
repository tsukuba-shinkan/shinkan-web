import React from "react"
import "./about.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutPage = () => (
  <Layout>
    <SEO title="このサイトについて" />
    <div className="page--about">
      <div className="about--paragraph">
        <h1>このサイトについて</h1>
        <p>
          このサイトは2020年度の新歓活動が新型コロナウイルスの影響により大幅に制限されることを受け、筑波大学Webページ学生委員会が中心となって製作しました。
          筑波大学内のサークル等の団体のポータルサイトとしてご活用いただければ幸いです。
        </p>
        <p>
          また、このサイトの開発はオープンソースプロジェクトとして進められ、様々な方にご協力をいただきました。この場をお借りして感謝申し上げます。
          <br />
          GitHubリポジトリは
          <a
            href="https://github.com/tsukuba-shinkan/shinkan-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちら
          </a>
        </p>
        <p>
          このサイト全体に関するお問い合わせ（不具合等）はWebページ学生委員会（
          webgaku(at)stb.tsukuba.ac.jp
          ）、各コンテンツに関するお問い合わせは各団体の連絡先にお願いいたします。
        </p>
      </div>
    </div>
  </Layout>
)

export default aboutPage
