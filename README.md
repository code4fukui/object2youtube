# object2youtube

- https://code4fukui.github.io/object2youtube/

## usage

```js
import { object2youtube } from "https://code4fukui.github.io/object2youtube/object2youtube.js";

const html2 = object2youtube(html);
```

## sample

```html
<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>
```
↓
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/4bo2HoDVrF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```
