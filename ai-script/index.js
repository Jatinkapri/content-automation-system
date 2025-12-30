const fetchArticle = require("./fetchArticle");
const googleSearch = require("./googleSearch");

const ARTICLE_ID = "PUT_REAL_ARTICLE_ID_HERE";

(async () => {
  try {
    const article = await fetchArticle(ARTICLE_ID);

    console.log("Article title:");
    console.log(article.title);

    const links = await googleSearch(article.title);

    console.log("Top reference articles:");
    console.log(links);
  } catch (error) {
    console.error("Phase 2 error:", error.message);
  }
})();

