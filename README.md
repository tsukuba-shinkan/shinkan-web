# 筑波大学新歓Web
[![CI status](https://github.com/tsukuba-shinkan/shinkan-web/workflows/CI/badge.svg)]()
[![Imagine the Future](https://img.shields.io/badge/imagine--the-future-0bf)](https://github.com/topics/imagine-the-future)

## Abstract
このサイトは新型コロナウイルス感染症の影響により2020年度のサークル等の新歓活動が大幅に制限されることをうけWebページ学生委員会により製作されています。  
各団体のポスター・ビラ画像及び活動内容紹介などを閲覧することができます。

## Setup Guide
このサイトでは、GatsbyJSを使用しています。まず、あなたのコンピューターに[Node.js](https://nodejs.org/ja/)およびnpmがインストールされていない場合はインストールしてください。
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


## How to Contribute
このサイトはオープンソースにより開発されています。皆さまのコントリビューションをお待ちしております。  
[Contribution Guide](/CONTRIBUTING.md)をご一読ください。

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
