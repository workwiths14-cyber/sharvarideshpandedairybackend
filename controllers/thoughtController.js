// ================= thoughtController.js =================

const Thought = require("../models/Thought");


// ================= CREATE THOUGHT =================

const createThought = async (
  req,
  res
) => {

  try {

    const {
      category,
      title,
      excerpt,
      content,
    } = req.body;

    const thought =
      await Thought.create({

        category,
        title,
        excerpt,
        content,

        image: req.file
          ? req.file.path
          : "",

      });

    res.status(201).json({
      message:
        "Thought Created Successfully",
      thought,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};


// ================= GET ALL THOUGHTS =================

const getThoughts = async (
  req,
  res
) => {

  try {

    const thoughts =
      await Thought.find().sort({
        createdAt: -1,
      });

    res.status(200).json(thoughts);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ================= GET SINGLE THOUGHT =================

const getSingleThought =
  async (req, res) => {

    try {

      const thought =
        await Thought.findById(
          req.params.id
        );

      if (!thought) {

        return res.status(404).json({
          message:
            "Thought Not Found",
        });

      }

      res.status(200).json(thought);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };


// ================= DELETE THOUGHT =================

const deleteThought = async (
  req,
  res
) => {

  try {

    await Thought.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "Thought Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ================= UPDATE THOUGHT =================

const updateThought = async (
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

    const updatedThought =
      await Thought.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

    res.status(200).json({
      message:
        "Thought Updated",
      updatedThought,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createThought,
  getThoughts,
  getSingleThought,
  deleteThought,
  updateThought,
};