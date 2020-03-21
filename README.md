# 筑波大学新歓Web
[![CI status](https://github.com/tsukuba-shinkan/shinkan-web/workflows/CI/badge.svg)]()
[![Imagine the Future](https://img.shields.io/badge/imagine--the-feature-0bf)](https://github.com/topics/imagine-the-future)

## Abstract
このサイトは新型コロナウイルス感染症の影響により2020年度のサークル等の新歓活動が大幅に制限されることをうけWebページ学生委員会により製作されています。  
各団体のポスター・ビラ画像及び活動内容紹介などを閲覧することができます。

## How to Contribute
このサイトはオープンソースにより開発されています。  
皆さまのコントリビューションをお待ちしております。
### Please Send Issues
サイトの不具合や修正すべき箇所をみつけた場合は、Issueを送信してください。
### Please Send Pull-Requests
もしあなたが、このサイトを改善された場合はプルリクエストを送信してください。内容を精査の上、Mergeさせていただきます。
#### How to Fork this Repository and Send Pull-Requests
まず、本ページ上部にある「Fork」をクリックして、このリポジトリをあなたのリポジトリにフォークしてください。その後の操作手順は以下のとおりです。

##### ローカルにクローンする、upstreamの設定
```console
git clone https://github.com/{your-account}/shinkan-web.git
git remote add upstream https://github.com/tsukuba-shinkan/shinkan-web.git
git fetch upstream
git checkout master
```
##### 開発環境のセットアップ
このサイトでは、GatsbyJSを使用しています。まず、あなたのコンピューターにNode.jsおよびnpmがインストールされていない場合はインストールしてください。
その後、
```
npm install
```
で必要なパッケージのインストールを行います。  
テスト環境は
```
gatsby develop
```
で構築できます。  
 詳細は各関連製品のドキュメントを参照してください。 

##### 変更の反映
upstreamに変更が加えられた場合は以下のようにしてローカルに変更を反映させてください。（毎作業ごとに行うことを推奨します。）
```console
git fetch upstream
git checkout master
git merge upstream/master
```

## Contact
If you want to contact us, please email to webgaku(at)stb.tsukuba.ac.jp 

&copy;2020 Student Council of WebPage, University of Tsukuba
