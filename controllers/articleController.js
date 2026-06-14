// ================= UPDATED ARTICLE CONTROLLER =================

const Article = require("../models/Article");

// ================= CREATE ARTICLE =================

const createArticle = async (
  req,
  res
) => {

  try {

    const {
      title,
      excerpt,
      content,
      category,
    } = req.body;

    const article =
      await Article.create({
        title,
        excerpt,
        content,
        category,
        image: req.file
          ? req.file.path
          : "",
      });

    res.status(201).json({
      message:
        "Article Created",
      article,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ================= GET ALL ARTICLES =================

const getAllArticles =
  async (req, res) => {

    try {

      const articles =
        await Article.find().sort({
          createdAt: -1,
        });

      res.status(200).json({
        articles,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };


// ================= DELETE ARTICLE =================

const deleteArticle = async (
  req,
  res
) => {

  try {

    await Article.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "Article Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ================= UPDATE ARTICLE =================

const updateArticle = async (
  req,
  res
) => {

  try {

    const updateData = {
      ...req.body,
    };

    if (req.file) {

      updateData.image =
        req.file.path;
    }

    const updatedArticle =
      await Article.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

    res.status(200).json({
      message:
        "Article Updated",
      updatedArticle,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ================= GET SINGLE ARTICLE =================

const getSingleArticle =
  async (req, res) => {

    try {

      const article =
        await Article.findById(
          req.params.id
        );

      if (!article) {

        return res.status(404).json({
          message:
            "Article Not Found",
        });

      }

      res.status(200).json({
        article,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };

module.exports = {
  createArticle,
  getAllArticles,
  getSingleArticle,
  deleteArticle,
  updateArticle,
};