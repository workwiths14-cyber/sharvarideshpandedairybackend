// ================= UPDATED POEM CONTROLLER =================

const Poem = require("../models/Poem");

// ================= CREATE POEM =================

const createPoem = async (req, res) => {

  try {

    const {
      category,
      title,
      excerpt,
      content,
    } = req.body;

    const poem = await Poem.create({
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
        "Poem Created Successfully",
      poem,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ================= GET ALL POEMS =================

const getPoems = async (req, res) => {

  try {

    const poems = await Poem.find()
      .sort({
        createdAt: -1,
      });

    res.status(200).json(poems);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ================= GET SINGLE POEM =================

const getSinglePoem =
  async (req, res) => {

    try {

      const poem =
        await Poem.findById(
          req.params.id
        );

      if (!poem) {

        return res.status(404).json({
          message:
            "Poem Not Found",
        });

      }

      res.status(200).json(poem);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };


// ================= DELETE POEM =================

const deletePoem = async (
  req,
  res
) => {

  try {

    await Poem.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Poem Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ================= UPDATE POEM =================

const updatePoem = async (
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

    const updatedPoem =
      await Poem.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

    res.status(200).json({
      message: "Poem Updated",
      updatedPoem,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createPoem,
  getPoems,
  getSinglePoem,
  deletePoem,
  updatePoem,
};