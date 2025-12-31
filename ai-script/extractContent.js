const axios = require("axios");
const cheerio = require("cheerio");

async function extractContent(url) {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    const $ = cheerio.load(response.data);

    let paragraphs = [];

    $("p").each((i, el) => {
      const text = $(el).text().trim();
      if (text.length > 80) {
        paragraphs.push(text);
      }
    });

    return paragraphs.slice(0, 3).join(" ");
  } catch (err) {
    return "";
  }
}

module.exports = extractContent;

