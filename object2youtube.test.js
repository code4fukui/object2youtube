import * as t from "https://deno.land/std/testing/asserts.ts";
import { object2youtube } from "./object2youtube.js";

Deno.test("simple", () => {
  const src = `<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object><br>`;
  const dst = `<iframe width="560" height="315" src="https://www.youtube.com/embed/4bo2HoDVrF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br>`;
  t.assertEquals(object2youtube(src), dst);
});

Deno.test("double", () => {
  const src = `<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object><br>`;
  const dst = `<iframe width="560" height="315" src="https://www.youtube.com/embed/4bo2HoDVrF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br>`;
  t.assertEquals(object2youtube(src + src), dst + dst);
});

Deno.test("not youtube", () => {
  const src = `<object width="480" height="385"><param name="movie" value="http://www.voutube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.voutube.com/v/4bo2HoDVrF0&amp;hl=ja_JP&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object><br>`;
  t.assertEquals(object2youtube(src), src);
});
