const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const thoughtRoutes = require("./routes/thoughtRoutes");
const poemRoutes = require("./routes/poemRoutes");
const articleRoutes = require("./routes/articleRoutes");
const homeRoutes = require("./routes/homeRoutes");

const app = express();


// ================= MIDDLEWARE =================

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());


// ================= STATIC FOLDER =================

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);


// ================= ROUTES =================

app.use("/api/auth", authRoutes);
app.use("/api/thought", thoughtRoutes);
app.use("/api/poem", poemRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/home", homeRoutes);


// ================= TEST ROUTE =================

app.get("/", (req, res) => {
  res.send("Server Running");
});


// ================= DATABASE =================

console.log("URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });
