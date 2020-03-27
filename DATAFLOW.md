# データフロー

## 🔰 このドキュメントの内容
掲載されるコンテンツの処理の流れとスキーマ

## 🚚 コンテンツの流れ
**掲載するコンテンツは、各団体がオンラインフォームに回答したものをスプレッドシートに集計して提供します。** また、静的アセット（画像）はスプレッドシート内でリソースへのリンクで示されます。

このリポジトリに含まれるのはサイトのテンプレートのみです。ビルド時にスプレッドシートのデータをダウンロードすることでコンテンツを注入します。

### 1️⃣ Googleフォームへの提出

* **各団体がフォームにアクセスし、必要事項の記入・アップロードを行います。** 
* 回答のエントリーは集計スプレッドシートに記録されます。
* フォームおよび集計スプレッドシートのURLは非公開です。

### 2️⃣ 集計スプレッドシート上でのデータ変換

* 各エントリーに対し **「団体名簿との照合」** および **「PDFで提出されたデータのレンダリング」** を行います。

### 3️⃣ 公開スプレッドシートへのコピー、公開

* 2.の工程を問題なくパスし、かつ管理者の内容チェックを通ったエントリーは、 **公開スプレッドシートへコピー** されます。
* この時、提出者の個人情報（名前・学籍番号・アカウント情報）の除去を行います。
* 管理者の内容チェックが手動であるため、Googleフォームの回答タイミングから反映までは不規則なラグが生じます。

### 4️⃣ ビルドコードでの取り込み

* リポジトリ内のプラグイン`gatsby-source-shinkan-web`が、 **gatsbyのビルド時にスプレッドシートをダウンロードし、コンテンツをGraphQLストアへ注入します。**

---

**Googleスプレッドシートは開発用・本番用の２系統を準備しています。** リポジトリではデフォルトで開発用のデータを使用しますが、環境変数での指定により、（自分で準備した物を含む）任意のデータを使用できます。具体的な手順については[`README`](/README.md)を参照してください。

| Stage | URL |
|-------|-----|
| 開発用 | https://docs.google.com/spreadsheets/d/1r4c4E7r1PDnaf6Mk6YIS6FAOblLBiX66socla-x8ct4 |
| 本番用 | https://docs.google.com/spreadsheets/d/1SDP5wlB7DtIa5pP1R7Idpw91RwbFUZuJczkW2kab9Vc |


## 🎓 スプレッドシートのスキーマ

全ての値は`String`として取り扱います。

:warning: **GatsbyのGraphQLストアに入る値（プラグインでパースしたもの）のスキーマは [`source-plugin`の`README`](/plugins/gatsby-source-shinkan-web/README.md)で定義しています。**

| key | description | required | example |
|-----|-------------|----------|---------|
| primaryKey | 団体ごとに一意なキー | :o: | `1` |
| timeStamp | 提出時刻のタイムスタンプ | :o:  | `2020/03/27 14:12:44` |
| organizationName | 団体名 | :o: | `記入例作成愛好会` |
| organizationType | 団体種別（`課外活動団体`/`一般学生団体`/`その他`のいずれか） | :o: | `課外活動団体` |
| activityType | 所属系（`体育系`/`文化系`/`芸術系`/`その他`のいずれか） | :o: | `芸術系` |
| pdfUrl | ポスター画像（A4縦型）のビューアのURL | :o: | `https://drive.google.com/open?id=XXXXXXX` |
| imageUrls | その他の画像（判型自由）のビューアのURL（カンマ区切り） | | `https://drive.google.com/open?id=XXXXX,https://drive.google.com/open?id=XXXXX` | 
| activityIntroduction | 活動紹介文（自由記述） | :o: | `24時間365日体制で記入例を作成し提供しています。` |
| website | WebサイトのURL | | `https://www.tsukuba.ac.jp` |
| twitter | TwitterのユーザーID | | `tsukuba_shinkan` |
| instagram | InstagramのユーザーID | | `tsukuba_shinkan` |
| wantToBeTweeted | 新歓Web Twitterでの紹介希望の有無（`希望する`/`希望しない`のいずれか） | :o: | `希望する` |
| posterImageUrls | ポスター画像（A4縦型）のリソースURL（カンマ区切り） | :o: | `https://drive.google.com/uc?id=XXXXXXXX,https://drive.google.com/uc?id=XXXXXXXX` |
| otherImageUrls | その他の画像（判型自由）のリソースURL（カンマ区切り） | | `https://drive.google.com/uc?id=XXXXXXXX,https://drive.google.com/uc?id=XXXXXXXX` |
