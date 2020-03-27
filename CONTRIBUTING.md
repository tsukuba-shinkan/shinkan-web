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
**このプロジェクトへの変更はIssueを前提としてください。  
不具合や修正したい箇所を見つけた場合はまず、Issueを作成してください。  
その後、Issueに @asagatto777 にメンションをつけてコメントし、Assignを受けてから変更をしてください。すでに存在するがAssineeがいないIssueについても同様です。**  


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

upstreamの変更をローカルに反映させる場合は以下のようにしてローカルに変更を反映させてください。
```console
git fetch upstream
git checkout master
git merge upstream/dev
```

#### コミット規約
コミットの際には以下のことを念頭に置いてください。
- 必ず作業単位ごとにコミットし、複数の種別の変更を一つのコミットにしない。
- 先頭にプレフィクスを以下の形式でつける
    - \[Add\] 新しいファイルや機能等の追加
    - \[Update\] 機能等の大きな更新
    - \[Fix\] 細かな不具合や見た目の修正
    - \[Delete\] ファイルや機能等の削除
    - \[Chore\] 本体に直接は関わらないツール等の変更
- プレフィクスの後には日本語で簡潔にコミット内容を説明する
    - 例）\[Add\] ヘッダーの追加

#### プルリクエスト
プルリクエストはdevブランチに対して発行してください。  
プルリクエストに不具合や修正すべき箇所がある場合には、コメント等でお伝えしますので、その箇所を修正し、あなたのリポジトリにコミット・プッシュしてください。新たなコミットの内容は自動的にプルリクエストに反映されます。

## References
- [PROPOSAL.md](PROPOSAL.md) このサイトの企画書です。
- [DATAFLOW.md](/DATAFLOW.md) 団体データの処理についての記載があります。