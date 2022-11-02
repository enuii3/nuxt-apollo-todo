## 実装内容

https://zenn.dev/atoz/articles/36dc9ab24c4db2

この記事の内容を Vue や Vuetify のドキュメントを見ながら実装してみてください。

### 記事との違い

```diff
- <script>
+ <script lang="ts"> // typescript対応

- export default {}
+ export default defineComponent({}) // typescript対応
</script>
```

Vue3 のドキュメント(使用しているのは正確には Vue2 の Composition API ですが Vue3 との違いはほとんどないです)
日本語もありますが、英語のページのほうが充実しています。
https://vuejs.org/guide/introduction.html

Vuetify
https://vuetifyjs.com/ja/

Nuxt
Nuxt Bridge という、nuxt2 で nuxt3 の機能の一部を使えるパッケージを導入しています。
基本 Nuxt3 のドキュメントを見ればいいと思います。
ドキュメントがあまりないので分からないことがあったら聞いてください。
https://v3.nuxtjs.org/

## git

### ブランチ名

- 機能追加のとき: feature/\*\*
- 修正のとき: fix/\*\*

### プルリクエストの流れ

1. 実装内容にあったブランチ名で新しいブランチをローカルに作成
2. 作成したブランチで作業を行う
3. 変更内容をコミット&push(同名のブランチをリモートリポジトリに作成)
4. backlog にブランチが追加されているはずなので、そのブランチのプルリクエストを作成する
   - 変更詳細には実装内容を簡単にまとめたものを書く
5. レビュー担当者にレビューをお願いする
6. レビュー担当者は変更内容を確認し、問題がなければマージする
   - 問題があれば実装者に修正を求める
