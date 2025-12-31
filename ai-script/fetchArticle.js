const axios = require("axios");

const BACKEND_URL = "http://localhost:5000/api/articles";

async function fetchArticle(articleId) {
  const response = await axios.get(`${BACKEND_URL}/${articleId}`);
  return response.data;
}

module.exports = fetchArticle;
