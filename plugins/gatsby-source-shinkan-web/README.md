# source-plugin

## オプション
```js
{
  // データソースとなるスプレッドシートのID
  // * ファイル中で最初のシートが取り込まれます。
  fileId: "XXXXXXXXXX"
}
```

## 注入データのスキーマ
```js
{
  primaryKey: "key",
  timeStamp: "2020-03-24 00:00",
  name: "記入例作成同好会",
  type: "課外活動団体",
  activityType: "芸術系",
  pdfUrl: "https://example.com/sample.pdf",
  imageUrls: [
    "https://example.com/sample.png"
  ],
  activityIntroduce: "24時間365日体制で記入例を作成し提供しています。",
  website: "https://example.com",
  twitter: "tsukuba_shinkan",
  instagram: "tsukuba_shinkan",
  wantToBeTweeted: "希望する",
  posterImageUrls: [
    "https://example.com/sample.png"
  ],
  otherImageUrls: [
    "https://example.com/sample.png"
  ],
}
```
