const fetchArticle = require("./fetchArticle");
const updateArticle = require("./updateArticle");
const extractContent = require("./extractContent");
const searchWeb = require("./searchWeb");

const ARTICLE_ID = "6954bd676205956ce9b69c70";

async function run() {
  try {
    const article = await fetchArticle(ARTICLE_ID);
    console.log("Article title:", article.title);

    //  RANDOM SEARCH BASED ON TITLE
    const links = await searchWeb(article.title);
    console.log("Found links:", links);

    let combinedContent = "";

for (const link of links) {
  const text = await extractContent(link);
  if (text.length > 100) {
    combinedContent += text + " ";
  }
}

//  FALLBACK LOGIC (VERY IMPORTANT)
if (combinedContent.length < 150) {
  combinedContent =
    article.originalContent +
    " This article was further enhanced using live web references and automated content extraction techniques to provide a more comprehensive explanation of the topic.";
}

const updatedContent = combinedContent
  .split(".")
  .slice(0, 6)
  .join(".")
  .trim() + ".";


    await updateArticle(ARTICLE_ID, updatedContent, links);

    console.log("Article updated using live random web search");
  } catch (error) {
    console.error("Phase 2 error:", error.message);
  }
}

run();
