export const object2youtube = (html) => {
  let idx = 0;
  const res = [];
  for (;;) {
    const n = html.indexOf("<object", idx);
    if (n < 0) {
      res.push(html.substring(idx));
      break;
    }
    const m = html.indexOf("</object>", n + 7);
    if (m < 0) {
      res.push(html.substring(idx));
      break;
    }
    const obj = html.substring(n, m);
    const match = obj.match(/youtube\.com\/v\/([^&?]+)/); // match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    //console.log(match)
    if (match && match[1]) {
      const videoId = match[1];
      res.push(html.substring(idx, n));
      res.push(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
    } else {
      res.push(html.substring(idx, m + 9));
    }
    idx = m + 9;
  }
  return res.join("");
};
