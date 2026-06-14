const express = require("express");

const {
  saveAbout,
  getAbout,
} = require("../controllers/aboutController");

const upload =
  require("../middleware/upload");

const router = express.Router();

// SAVE ABOUT

router.post(
  "/save",
  upload.single("image"),
  saveAbout
);

// GET ABOUT

router.get("/", getAbout);

module.exports = router;