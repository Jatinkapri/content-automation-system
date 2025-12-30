const axios = require("axios");
const cheerio = require("cheerio");

async function googleSearch(query) {
  const searchUrl = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;

  const { data } = await axios.get(searchUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });

  const $ = cheerio.load(data);
  const links = [];

  $("a.result__a").each((i, el) => {
    const url = $(el).attr("href");

    if (
      url &&
      !url.includes("beyondchats.com") &&
      !url.includes("duckduckgo.com")
    ) {
      links.push(url);
    }
  });

  return links.slice(0, 2);
}

module.exports = googleSearch;
