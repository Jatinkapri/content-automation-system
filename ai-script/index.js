const fetchArticle = require("./fetchArticle");
const googleSearch = require("./googleSearch");
const scrapeArticle = require("./scraper");

const ARTICLE_ID = "PUT_REAL_ARTICLE_ID_HERE";

(async () => {
  try {
    const article = await fetchArticle(ARTICLE_ID);

    console.log("Article title:");
    console.log(article.title);

    const links = await googleSearch(article.title);

    console.log("Reference URLs:");
    console.log(links);

    const scrapedContents = [];

    for (const link of links) {
      const content = await scrapeArticle(link);
      scrapedContents.push(content);
    }

    console.log("Scraped reference content length:");
    console.log(scrapedContents.map(c => c.length));
  } catch (error) {
    console.error("Phase 2 error:", error.message);
  }
})();


