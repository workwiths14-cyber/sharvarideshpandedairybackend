const About = require("../models/About");

// SAVE ABOUT

const saveAbout = async (req, res) => {

  try {

    const imagePath = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : "";

    const existingAbout =
      await About.findOne();

    // UPDATE

    if (existingAbout) {

      existingAbout.name =
        req.body.name;

      existingAbout.description =
        req.body.description;

      if (imagePath) {
        existingAbout.image =
          imagePath;
      }

      await existingAbout.save();

      return res.status(200).json({
        message: "About Updated",
        about: existingAbout,
      });
    }

    // CREATE

    const about = await About.create({

      name: req.body.name,

      description:
        req.body.description,

      image: imagePath,
    });

    res.status(201).json({
      message: "About Created",
      about,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ABOUT

const getAbout = async (req, res) => {

  try {

    const about = await About.findOne();

    res.status(200).json(about);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveAbout,
  getAbout,
};