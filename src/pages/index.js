import React, { useState, useEffect, createRef } from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes, faFilter } from "@fortawesome/free-solid-svg-icons"
import { activityTypes, normalizeActivityType } from "../lib/normalize"
import LazyLoad from "react-lazyload"

import Layout from "../components/layout"
import Fluid200 from "../components/Fluid200"
import SEO from "../components/seo"

const IndexPage = () => {
  const [lastTouchedItem, setLastTouchedItem] = useState(null)

  // ポスターのシャッフル
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const shuffle = () => (mounted ? 1 : Math.random() - 0.5)

  // サーチ文字列: string
  const [queryString, setQueryString] = useState("")

  // 選択中カテゴリ: activityTypes[]
  const [queryCategories, setQueryCategories] = useState([])

  // サーチボックス表示: boolean
  const [searchBoxOpened, setSearchBoxOpened] = useState(false)

  // カテゴリ選択表示: boolean
  const [categorySelectorOpened, setCategorySelectorOpened] = useState(false)

  // サーチボックス<input>への参照
  const filterSearchInputRef = createRef()

  /**
   * 指定のカテゴリでのフィルタを追加する
   */
  const addQueryCategory = category =>
    !queryCategories.includes(category)
      ? setQueryCategories([...queryCategories, category])
      : false

  /**
   * 指定のカテゴリでのフィルタを削除する
   */
  const removeQueryCategory = category =>
    queryCategories.includes(category)
      ? setQueryCategories([...queryCategories].filter(c => c !== category))
      : false

  /**
   * 現在のクエリに一致するかを返す
   * */
  const filterWithQueries = org => {
    const isStringEnable = queryString && queryString.length > 0
    const isCategoryEnable = queryCategories.length > 0

    if (!isStringEnable && !isCategoryEnable) return true

    if (
      isCategoryEnable &&
      !queryCategories.includes(normalizeActivityType(org.activityType))
    ) {
      return false
    } else if (
      isStringEnable &&
      org.name.indexOf(queryString.replace(/^\s+|\s+$/gi, "")) === -1 // 先頭・末尾の空白文字は無視する
    ) {
      return false
    }

    return true
  }

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

  const filteredOrgs = orgs.edges
    .sort(shuffle)
    .filter(({ node: org }) => filterWithQueries(org))

  return (
    <Layout>
      <SEO title="ホーム" />

      <div className="page--index">
        <div // スマホのみ: キャンセルアクションのためのカバー
          className={
            "sm-ui-shadow" +
            ((searchBoxOpened && (!queryString || queryString.length === 0)) ||
            categorySelectorOpened
              ? " is-active"
              : "")
          }
          onClick={() => {
            setSearchBoxOpened(false)
            setCategorySelectorOpened(false)
          }}
        ></div>
        <div // フィルタUIのsticky表示範囲
          className="page--index__wrap"
        >
          <nav // フィルターUI
            className={
              "org-list-filter" + (searchBoxOpened ? " is-search-box-mode" : "")
            }
          >
            <div // カテゴリ
              className={
                "org-list-filter__section org-list-filter__section--category" +
                (queryCategories.length > 0 ? " is-active" : "")
              }
            >
              <span
                className="org-list-filter__section--category__icon-container"
                onClick={() => setCategorySelectorOpened(true)}
              >
                <FontAwesomeIcon icon={faFilter} />
              </span>
              <div
                className={
                  "org-list-filter__section--category__selector" +
                  (categorySelectorOpened ? " is-open" : "") // スマホ向け: カテゴリUIを開く
                }
              >
                <ul // カテゴリ選択肢
                >
                  {[
                    activityTypes.PHYSICAL,
                    activityTypes.CULTURE,
                    activityTypes.ART,
                    activityTypes.OTHER,
                  ].map(category => (
                    <li
                      key={category}
                      onClick={() =>
                        queryCategories.includes(category)
                          ? removeQueryCategory(category)
                          : addQueryCategory(category)
                      }
                      className={
                        queryCategories.includes(category) ? "is-active" : ""
                      }
                    >
                      {category}
                    </li>
                  ))}
                </ul>
                <button // スマホ向け: 閉じるボタン
                  className="close-button"
                  onClick={() => setCategorySelectorOpened(false)}
                >
                  閉じる
                </button>
              </div>
            </div>
            <div // サーチボックス
              className="org-list-filter__section org-list-filter__section--search"
            >
              <span className="org-list-filter__section--search__icon-container">
                <FontAwesomeIcon
                  icon={
                    queryString && queryString.length > 0 ? faTimes : faSearch // 入力中はクリアボタンにする
                  }
                  onClick={() => {
                    setSearchBoxOpened(!searchBoxOpened)
                    setQueryString()
                    filterSearchInputRef.current.focus()
                  }}
                />
              </span>
              <input
                ref={filterSearchInputRef}
                onChange={e => setQueryString(e.target.value)}
                value={queryString || ""}
              />
            </div>
          </nav>

          {filteredOrgs.length > 0 ? (
            <ul className="org-list">
              {filteredOrgs.map(({ node: org }) => (
                <li className="org-list__item" key={org.primaryKey}>
                  <LazyLoad offset={200} once>
                    <Link to={`/org/${org.primaryKey}`}>
                      <figure className="org-list__item__poster">
                        <Fluid200 url={org.posterImageUrls[0]} alt="" />
                        <figcaption>
                          <h2 className="org-list__item__name">{org.name}</h2>
                          <p className="org-list__item__activity-introduce">
                            {org.activityIntroduce.slice(0, 100) + "..."}
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
                        {org.activityIntroduce.slice(0, 100) + "..."}
                      </div>
                    </div>
                  </LazyLoad>
                </li>
              ))}
            </ul>
          ) : (
            <div // エンプティステート
              className="org-list--empty"
            >
              <p>一致する団体を見つけられませんでした。</p>
              <p>
                漢字・かななどの表記は間違いありませんか？
                <br />
                名前の一部だけでも検索できます。
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
