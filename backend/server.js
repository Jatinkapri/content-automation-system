require("dotenv").config();   

const express = require("express");
const connectDB = require("./config/db");

const app = express();


connectDB();

app.use(express.json());

app.use("/api/articles", require("./routes/articleRoutes"));

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


