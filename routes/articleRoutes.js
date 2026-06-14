const express = require("express");

const {
  createArticle,
  getAllArticles,
  getSingleArticle,
  deleteArticle,
  updateArticle,
} = require("../controllers/articleController");

const upload = require("../middleware/upload");

const router = express.Router();


// ================= CREATE ARTICLE =================

router.post(
  "/create-article",
  upload.single("image"),
  createArticle
);


// ================= GET ALL ARTICLES =================

router.get(
  "/all-articles",
  getAllArticles
);


// ================= GET SINGLE ARTICLE =================

router.get(
  "/:id",
  getSingleArticle
);


// ================= DELETE ARTICLE =================

router.delete(
  "/delete/:id",
  deleteArticle
);


// ================= UPDATE ARTICLE =================

router.put(
  "/update/:id",
  upload.single("image"),
  updateArticle
);

module.exports = router;