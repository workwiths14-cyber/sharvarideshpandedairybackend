const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    logoText: String,

    tagline: String,

    heroInput1: String,

    heroInput2: String,

    heroInput3: String,

    smallText1: String,

    smallText2: String,

    buttonText: String,

    aboutHeading: String,

    aboutName: String,

    aboutDesc: String,

    aboutImage: String,
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Home",
  homeSchema
);