Here is the Japanese translation of the provided README markdown chunk:

# object2youtube

English README is here: [README.md](README.md)

The Japanese README is available here: [README.ja.md](README.ja.md)

YouTube 埋め込みの `<object>` を `<iframe>` に変換する JavaScript ライブラリです。

## デモ
https://code4fukui.github.io/object2youtube/

## 機能
- `<object>` YouTubeエンベッドを自動的に `<iframe>` エンベッドに変換する
- 同じHTMLの中の単一または複数のYouTubeエンベッドに対応する

## 使用法
```js
import { object2youtube } from "https://code4fukui.github.io/object2youtube/object2youtube.js";

const html2 = object2youtube(html);
```

## サンプル
```html
<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>
```
↓
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/4bo2HoDVrF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
