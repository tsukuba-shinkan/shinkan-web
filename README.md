# 筑波大学新歓Web
[![CI status](https://github.com/tsukuba-shinkan/shinkan-web/workflows/CI/badge.svg)]()
[![Imagine the Future](https://img.shields.io/badge/imagine--the-future-0bf)](https://github.com/topics/imagine-the-future)

## Abstract
このサイトは新型コロナウイルス感染症の影響により2020年度のサークル等の新歓活動が大幅に制限されることをうけWebページ学生委員会により製作されています。  
各団体のポスター・ビラ画像及び活動内容紹介などを閲覧することができます。

## Setup Guide
まず、このリポジトリをあなたのリポジトリにフォークしてください。その後の手順は以下のとおりです。

ローカルへのクローンとupatreamの設定を行なってください。
```console
git clone https://github.com/{your-account}/shinkan-web.git
git remote add upstream https://github.com/tsukuba-shinkan/shinkan-web.git
git fetch upstream
git checkout master
```

[Node.js](https://nodejs.org/ja/)およびnpmがインストールされていない場合はインストールしてください。

```console
# 必要な依存パッケージのインストール
npm install

# 開発ビルドの開始
gatsby develop
```

プロジェクトは`.env`ファイルを自動的に読み込みます。`.template.env`をコピーして`.env`を作成することで、環境変数から注入可能な値を適宜変更できます。

## How to Contribute
このサイトはオープンソースにより開発されています。皆さまのコントリビューションをお待ちしております。  
[Contribution Guide](/CONTRIBUTING.md)をご一読ください。  
Adobe XDによるデザイン原案は[こちら](https://xd.adobe.com/view/ca957b4d-3739-4c27-566f-ddd0cf4bead8-bca4/)

## References
- [PROPOSAL.md](PROPOSAL.md) このサイトの企画書です。
- [DATAFLOW.md](/DATAFLOW.md) 団体データの処理についての記載があります。

## Contact
If you want to contact us, please email to webgaku(at)stb.tsukuba.ac.jp 

&copy;2020 Student Council of WebPage, University of Tsukuba
