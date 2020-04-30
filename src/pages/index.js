import React, { useState, useLayoutEffect, createRef } from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes, faFilter } from "@fortawesome/free-solid-svg-icons"
import { activityTypes, normalizeActivityType } from "../lib/normalize"

import Layout from "../components/layout"
import OrgListItem from "../components/OrgListItem"
import SEO from "../components/seo"

const IndexPage = () => {
  const [lastTouchedItem, setLastTouchedItem] = useState(null)

  // ポスターのシャッフル
  const [orgsOrder, setOrgsOrder] = useState([])
  const [mounted, setMounted] = useState(false)
  const shuffle = () => (mounted ? 1 : Math.random() - 0.5)

  useLayoutEffect(() => {
    setMounted(true)
    let ss = sessionStorage.getItem("shuffle_seed")
    if (!ss) {
      // sessionStorageにポスター表示順が管理されていない時，シャッフルしてSessionStorageに表示順を保存
      ss = [...Array(orgs.edges.length).keys()].sort(shuffle)
      sessionStorage.setItem("shuffle_seed", JSON.stringify(ss))
    } else {
      ss = JSON.parse(ss)
      if (ss.length !== orgs.edges.length) {
        // SessionStorageの団体数が異なる場合，更新があったということなのでSessionStorageの値を更新する．
        ss = [...Array(orgs.edges.length).keys()].sort(shuffle)
        sessionStorage.setItem("shuffle_seed", JSON.stringify(ss))
      }
    }
    setOrgsOrder(ss)
  }, [])

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
    .reduce((prev, edge, index, edges) => {
      if (orgsOrder.length > 0) return [...prev, edges[orgsOrder[index]]]
      else return [...prev, edges[index]]
    }, [])
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
                <OrgListItem
                  key={org.primaryKey}
                  org={org}
                  onClick={() => {
                    if (lastTouchedItem === org.primaryKey)
                      navigate(`/org/${org.primaryKey}`)
                    setLastTouchedItem(org.primaryKey)
                  }}
                />
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
