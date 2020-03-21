# Contribution Guide

**ただいま、alphaバージョンのリリースまでの開発作業をおこなっています。**

**みなさまにご協力をお願いする段階になりましたら、[Twitter (@tsukuba_shinkan)](https://twitter.com/tsukuba_shinkan)でお知らせいたします。もうしばらくお待ちください。**

---

このサイトはオープンソースにより開発されています。  
みなさまのコントリビューションをお待ちしております。

## Please Send Issues
サイトの不具合や修正すべき箇所をみつけた場合は、Issueを送信してください。

## Please Send Pull-Requests
もしあなたが、このサイトを改善された場合はプルリクエストを送信してください。内容を精査の上、Mergeさせていただきます。
### How to Fork this Repository and Send Pull-Requests
まず、本ページ上部にある「Fork」をクリックして、このリポジトリをあなたのリポジトリにフォークしてください。その後の操作手順は以下のとおりです。

#### ローカルにクローンする、upstreamの設定
```console
git clone https://github.com/{your-account}/shinkan-web.git
git remote add upstream https://github.com/tsukuba-shinkan/shinkan-web.git
git fetch upstream
git checkout master
```

#### 変更の反映
各コミットにはLintに引っかかるエラーがないことを確認してください。  
Lintは`git commit`の際に自動で実行されるほか、手動で実行する（`npm run lint`）こともできます。自動で修正可能な問題は`npm run lintfix`で修正することもできます。

upstreamに変更が加えられた場合は以下のようにしてローカルに変更を反映させてください。（毎作業ごとに行うことを推奨します。）
```console
git fetch upstream
git checkout master
git merge upstream/master
```
