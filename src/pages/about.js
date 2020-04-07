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
        <h2>オープンソース</h2>
        <p>
          このサイトの開発はオープンソースプロジェクトとして進められ、様々な方にご協力をいただきました。この場をお借りして感謝申し上げます。
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
        <h2>Google Analyticsの利用について</h2>
        <p>
          このサイトでは、利用状況を把握し、サイトの改善につなげるためにGoogle
          Analyticsを使用しています。 Google
          AnalyticsではCookieを利用し、個人を特定する情報を含まない形でアクセス情報を収集しています。
        </p>
        <p>
          Google Analyticsでの個人情報の扱いについては
          <a
            href="https://support.google.com/analytics/answer/6004245?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google社のサイト
          </a>
          をご覧ください。
        </p>
        <h2>お問い合わせ</h2>
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
