const Article = require("../models/Article");

exports.createArticle = async (req, res) => {
  const article = await Article.create(req.body);
  res.json(article);
};

exports.getArticles = async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
};

exports.getArticleById = async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
};
