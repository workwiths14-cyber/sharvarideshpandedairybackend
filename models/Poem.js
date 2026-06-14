const mongoose = require("mongoose");

const poemSchema = new mongoose.Schema(
  {
    category: String,
    title: String,
    excerpt: String,
    content: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Poem",
  poemSchema
);