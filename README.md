BeyondChats – Phase 1 Backend
Overview

This repository contains Phase 1 of the BeyondChats Full Stack Developer Intern assignment.

In this phase, a backend system is built to scrape blog articles, store them in a database, and manage them using REST APIs.
This backend will be used in later phases for AI-based content updates and frontend rendering.

Phase 1 Tasks Implemented

Scraped the 5 oldest articles from the BeyondChats blog section

Stored scraped articles in MongoDB

Created CRUD APIs to manage articles

All Phase 1 requirements mentioned in the assignment have been completed.

Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Axios

Cheerio

Project Structure
project/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── scraper/
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md

API Endpoints

Base path:

/api/articles


POST /api/articles – Create article

GET /api/articles – Get all articles

GET /api/articles/:id – Get article by ID

PUT /api/articles/:id – Update article

DELETE /api/articles/:id – Delete article

How to Run Phase 1
1. Install dependencies
cd backend
npm install

2. Create .env file
MONGO_URI=mongodb://127.0.0.1:27017/contentAutomation

3. Start backend server
npm start

4. Run scraping script
node scraper/scrapeBeyondChats.js

Git Workflow

The project follows a frequent commit strategy, where each major step (setup, database, APIs, scraping) was committed separately to show proper development flow.

Phase 1 Status

Phase 1 completed successfully
All assignment requirements satisfied



Phase 2 – AI Content Automation
Overview

Phase 2 focuses on automating content improvement using external references and AI logic.
The goal is to take articles stored in Phase 1, enhance them using information from other sources, and update them back into the system.

This phase is implemented as a separate Node.js script, keeping the backend and automation logic independent.

What Phase 2 Does

For a selected article, the script performs the following steps:

Fetches the article from the backend using REST API

Searches the article title on the web

Extracts two relevant reference articles

Scrapes the main content from those references

Uses AI logic to rewrite and improve the original article

Updates the article in the backend with:

AI-generated content

Reference links

AI update status

Phase 2 Folder Structure
ai-script/
├── index.js
├── fetchArticle.js
├── googleSearch.js
├── scraper.js
├── llm.js
├── updateArticle.js
└── package.json


Each file handles a single responsibility, making the automation pipeline easy to understand and extend.

How to Run Phase 2
cd ai-script
npm install
npm start


The backend server must be running for Phase 2 to work correctly.

Design Notes

Phase 2 communicates only through backend APIs

No direct database access is used

AI logic is modular and can be connected to any LLM provider

Reference links are preserved for transparency

Phase 2 Status

 Phase 2 completed successfully
 AI automation pipeline implemented
 Backend integration verified