const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

/**
 * CREATE ARTICLE
 * POST /api/articles
 */
router.post("/", async (req, res) => {
  try {
    const article = new Article({
      title: req.body.title,
      originalContent: req.body.originalContent,
      isAiUpdated: false
    });

    const savedArticle = await article.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET ALL ARTICLES
 * GET /api/articles
 */
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET SINGLE ARTICLE
 * GET /api/articles/:id
 */
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * UPDATE ARTICLE (AI UPDATE)
 * PUT /api/articles/:id
 */
router.put("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    article.updatedContent = req.body.updatedContent;
    article.isAiUpdated = req.body.isAiUpdated;
    article.references = req.body.references;

    await article.save();
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
