const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    originalContent: String,
    updatedContent: String,
    sourceUrl: String,
    isAiUpdated: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);
