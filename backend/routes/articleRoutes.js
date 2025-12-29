const express = require("express");
const {
  createArticle,
  getArticles,
  getArticleById
} = require("../controllers/articleController");

const router = express.Router();

router.post("/", createArticle);
router.get("/", getArticles);
router.get("/:id", getArticleById);

module.exports = router;
