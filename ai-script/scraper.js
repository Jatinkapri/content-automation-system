const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeArticle(url) {
  const { data } = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });

  const $ = cheerio.load(data);

  // Remove unwanted elements
  $("script, style, nav, footer, header, aside").remove();

  // Extract visible text
  const text = $("body").text();

  return text.replace(/\s+/g, " ").trim();
}

module.exports = scrapeArticle;
