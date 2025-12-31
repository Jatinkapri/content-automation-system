const axios = require("axios");
const cheerio = require("cheerio");

async function searchWeb(query) {
  const searchUrl = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  const response = await axios.get(searchUrl);
  const $ = cheerio.load(response.data);

  const links = [];

  $("a.result__a").each((i, el) => {
    if (i < 3) {
      const href = $(el).attr("href");
      if (href) links.push(href);
    }
  });

  return links;
}

module.exports = searchWeb;
