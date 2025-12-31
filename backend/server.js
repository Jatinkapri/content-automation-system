require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const articleRoutes = require("./routes/articleRoutes");

const app = express();

app.use(cors());               // ⭐ THIS FIXES YOUR ISSUE
app.use(express.json());

connectDB();

app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
