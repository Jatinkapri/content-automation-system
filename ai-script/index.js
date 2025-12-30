const fetchArticle = require("./fetchArticle");
const googleSearch = require("./googleSearch");
const scrapeArticle = require("./scraper");
const rewriteArticle = require("./llm");
const updateArticle = require("./updateArticle");

const ARTICLE_ID = "PUT_REAL_ARTICLE_ID_HERE";

(async () => {
  try {
    const article = await fetchArticle(ARTICLE_ID);

    console.log("Article title:");
    console.log(article.title);

    const links = await googleSearch(article.title);

    const referenceContents = [];
    for (const link of links) {
      const content = await scrapeArticle(link);
      referenceContents.push(content);
    }

    const aiResult = await rewriteArticle(
      article.originalContent,
      referenceContents
    );

    await updateArticle(
      ARTICLE_ID,
      aiResult.updatedContent,
      links
    );

    console.log("Article successfully updated with AI content");
  } catch (error) {
    console.error("Phase 2 error:", error.message);
  }
})();
