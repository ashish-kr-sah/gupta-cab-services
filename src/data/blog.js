/*
  ============  BLOG POSTS  ============

  Naya post add karna ho to list ke SABSE UPAR ek line add karo.

    "https://www.instagram.com/reel/XXXXXXXXXXX/",
    "https://www.instagram.com/p/XXXXXXXXXXX/",
    "/videos/my-trip.mp4",
    "/images/g7.jpeg",

  Ya object:

    {
      url: "https://www.instagram.com/reel/XXXXXXXXXXX/",
      title: "Gangtok Trip",
      caption: "Hamare guests ke sath"
    }

*/

const RAW = [
  "https://www.instagram.com/reel/DcUCQeuzFvg/",
  "https://www.instagram.com/reel/Db005mfzoUH/",
  "https://www.instagram.com/reel/Dd3CB77zNPf/",
  "https://www.instagram.com/reel/DduEuJZTope/",
  "https://www.instagram.com/reel/DX_4cBWzd1z/",
  "https://www.instagram.com/reel/DYtXM6bA7Le/",
  "https://www.instagram.com/reel/DXbtnWcExS0/",
  "https://www.instagram.com/reel/DXyVTreAGdJ/",
  "https://www.instagram.com/reel/Da7KSi7Rq6K/",
];


/* =========================================
   DETECT POST TYPE
========================================= */

const detectType = (url) => {
  if (/instagram\.com/i.test(url)) {
    return "instagram";
  }

  if (/\.(mp4|webm|mov|m4v)(\?|$)/i.test(url)) {
    return "video";
  }

  return "image";
};


/* =========================================
   CLEAN INSTAGRAM URL
========================================= */

const cleanInsta = (url) => {
  const m = url.match(
    /instagram\.com\/(reel|reels|p|tv)\/([A-Za-z0-9_-]+)/i
  );

  if (!m) return url;

  const type = m[1].toLowerCase() === "reels"
    ? "reel"
    : m[1].toLowerCase();

  return `https://www.instagram.com/${type}/${m[2]}/`;
};


/* =========================================
   FINAL POSTS ARRAY
========================================= */

export const posts = RAW.map((item, i) => {
  const o =
    typeof item === "string"
      ? { url: item }
      : item;

  const type = o.type || detectType(o.url);

  return {
    id: i,
    type,
    ...o,
    url:
      type === "instagram"
        ? cleanInsta(o.url)
        : o.url,
  };
});