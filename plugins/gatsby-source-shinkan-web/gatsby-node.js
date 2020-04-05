const axios = require("axios")
const parseCsv = require("csv-parse/lib/sync")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.sourceNodes = async (
  { actions, cache, createNodeId, createContentDigest, store },
  options
) => {
  const { createNode } = actions

  // キャッシュを取り込む
  let orgData = await cache.get("orgData")

  if (!orgData) {
    console.info("[source-shinkan-web] Fetching remote source...")

    // Spreadsheetからのデータ取得
    const { data: orgDataCsv } = await axios.get(
      `https://docs.google.com/spreadsheets/d/${options.fileId}/export?format=csv`
    )

    // CSVのパース
    orgData = parseCsv(orgDataCsv)
  } else {
    console.info(
      "[source-shinkan-web] Using cached source. If reloading is needed, remove `/.cache` directory or run `npm run clean`."
    )
  }

  // CSVのパース結果をキャッシュする
  await cache.set("orgData", orgData)

  // ノードを作成
  // * 0行目は見出し行としてスキップする
  const primaryKeys = []
  const splitArrayString = s =>
    s.length > 0 ? s.replace(/\s*,\s*/g, ",").split(",") : []
  for (let i = orgData.length - 1; i > 0; i--) {
    const row = orgData[i]
    const data = {
      primaryKey: row[0],
      timeStamp: row[1],
      name: row[2],
      type: row[3],
      activityType: row[4],
      pdfUrl: row[5],
      imageUrls: splitArrayString(row[6]),
      activityIntroduce: row[7],
      website: row[8],
      twitter: row[9],
      instagram: row[10],
      wantToBeTweeted: row[11],
      posterImageUrls: splitArrayString(row[12]),
      otherImageUrls: splitArrayString(row[13]),
    }

    // より下の行で同じプライマリキーがある場合は重複として無視する
    if (primaryKeys.includes(data.primaryKey)) continue

    const nodeContent = JSON.stringify(data)
    try {
      const images = await Promise.all(
        data.imageUrls.map(async url => {
          const fileNode = await createRemoteFileNode({
            url,
            cache,
            store,
            createNode: actions.createNode,
            createNodeId: createNodeId,
          })
          return fileNode
        })
      )

      const posterImages = await Promise.all(
        data.posterImageUrls.map(async url => {
          const fileNode = await createRemoteFileNode({
            url,
            cache,
            store,
            createNode: actions.createNode,
            createNodeId: createNodeId,
          })
          return fileNode
        })
      )

      const otherImages = await Promise.all(
        data.otherImageUrls.map(async url => {
          const fileNode = await createRemoteFileNode({
            url,
            cache,
            store,
            createNode: actions.createNode,
            createNodeId: createNodeId,
          })
          return fileNode
        })
      )

      createNode({
        ...data,
        id: createNodeId(`sheet-data-${row[0]}`),
        parent: null,
        children: [],
        internal: {
          type: "ShinkanWebOrg",
          content: nodeContent,
          contentDigest: createContentDigest(nodeContent),
        },
        images,
        posterImages,
        otherImages,
      })
    } catch (e) {
      console.log("Error", e)
      continue
    }
  }
}
