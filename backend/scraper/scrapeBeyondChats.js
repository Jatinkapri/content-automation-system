const axios = require("axios");
const cheerio = require("cheerio");

const BLOG_URL = "https://beyondchats.com/blogs/";
const API_URL = "http://localhost:5000/api/articles";

(async () => {
  const { data } = await axios.get(BLOG_URL);
  const $ = cheerio.load(data);

  const links = [];
  $("a").each((i, el) => {
    const href = $(el).attr("href");
    if (href && href.includes("/blog/")) links.push(href);
  });

  for (let i = links.length - 1; i >= links.length - 5; i--) {
    const page = await axios.get(links[i]);
    const $$ = cheerio.load(page.data);

    await axios.post(API_URL, {
      title: $$("h1").text(),
      originalContent: $$("article").text(),
      sourceUrl: links[i]
    });
  }
})();
