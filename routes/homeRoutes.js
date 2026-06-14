const express = require("express");

const router = express.Router();

const upload =
  require("../middleware/upload");

const {
  saveHomeData,
  getHomeData,
} = require("../controllers/homeController");

// SAVE HOME

router.post(
  "/save-home",
  upload.single("aboutImage"),
  saveHomeData
);

// GET HOME

router.get(
  "/get-home",
  getHomeData
);

module.exports = router;