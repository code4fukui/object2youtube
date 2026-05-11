# object2youtube

HTML文字列内でレガシーなYouTube `<object>` 埋め込みタグを現代的な `<iframe>` 形式に変換するシンプルなJavaScriptモジュールです。

[**ライブデモ**](https://code4fukui.github.io/object2youtube/)

## 機能

- レガシーなFlashベースのYouTube `<object>` 埋め込みを標準的な `<iframe>` 埋め込みに変換します。
- `<object>` タグ内に存在する `youtube.com/v/...` 形式のURLから動画IDを抽出します。
- 周囲のHTMLコンテンツをすべて保持します。
- 単一の文字列内に存在する複数の `<object>` タグを処理します。
- YouTubeのURLを含まない `<object>` タグは無視し、変更しません。

## 使い方

これは標準のESモジュールであり、現代のJavaScript環境（Denoやブラウザなど）でURLから直接インポートできます。

```js
import { object2youtube } from "https://code4fukui.github.io/object2youtube/object2youtube.js";

const legacyHTML = `... your html string with <object> tags ...`;
const modernHTML = object2youtube(legacyHTML);
```

## 例

### 変換前

スクリプトはYouTubeのURLを含む `<object>` タグを見つけます。

```html
<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>
```

### 変換後

`<object>` ブロック全体を現代的な `<iframe>` 埋め込みに置き換えます。

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/4bo2HoDVrF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

## ライセンス

MIT
