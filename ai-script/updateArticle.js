const axios = require("axios");

const BACKEND_URL = "http://localhost:5000/api/articles";

async function updateArticle(articleId, updatedContent, references) {
  const response = await axios.put(`${BACKEND_URL}/${articleId}`, {
    updatedContent,
    isAiUpdated: true,
    references
  });

  return response.data;
}

module.exports = updateArticle;
