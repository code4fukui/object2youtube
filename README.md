# object2youtube

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple JavaScript module to convert legacy YouTube `<object>` embed tags to modern `<iframe>` format within an HTML string.

[**Live Demo**](https://code4fukui.github.io/object2youtube/)

## Features

-   Converts legacy Flash-based YouTube `<object>` embeds to standard `<iframe>` embeds.
-   Extracts the video ID from `youtube.com/v/...` URLs found within the object tag.
-   Preserves all surrounding HTML content.
-   Handles multiple `<object>` tags in a single string.
-   Ignores `<object>` tags that do not contain YouTube URLs, leaving them unchanged.

## Usage

This is a standard ES module and can be imported directly from its URL in any modern JavaScript environment (like Deno or a browser).

```js
import { object2youtube } from "https://code4fukui.github.io/object2youtube/object2youtube.js";

const legacyHTML = `... your html string with <object> tags ...`;
const modernHTML = object2youtube(legacyHTML);
```

## Example

### Before

The script finds `<object>` tags containing a YouTube URL.

```html
<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>
```

### After

It replaces the entire `<object>` block with a modern `<iframe>` embed.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/4bo2HoDVrF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

## License

MIT