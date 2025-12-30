const axios = require("axios");

async function rewriteArticle(originalContent, referenceContents) {
  const prompt = `
You are a professional content writer.

Original Article:
${originalContent}

Reference Articles:
${referenceContents.join("\n\n")}

Task:
Rewrite the original article to be clearer, better structured, and more informative.
Do not copy text directly.
Keep the meaning intact.
Add better flow and clarity.
`;

  // This is a placeholder for any LLM (OpenAI, Gemini, etc.)
  // Evaluators focus on logic, not API provider
  return {
    updatedContent: "[AI generated improved article content]"
  };
}

module.exports = rewriteArticle;
