const Home = require("../models/Home");

// SAVE HOME DATA

const saveHomeData = async (
  req,
  res
) => {

  try {

    console.log(req.body);

    console.log(req.file);

    const existingHome =
      await Home.findOne();

    const data = {

      logoText:
        req.body.logoText,

      tagline:
        req.body.tagline,

      heroInput1:
        req.body.heroInput1,

      heroInput2:
        req.body.heroInput2,

      heroInput3:
        req.body.heroInput3,

      smallText1:
        req.body.smallText1,

      smallText2:
        req.body.smallText2,

      buttonText:
        req.body.buttonText,

      aboutHeading:
        req.body.aboutHeading,

      aboutName:
        req.body.aboutName,

      aboutDesc:
        req.body.aboutDesc,

      aboutImage:
        req.file
          ? req.file.filename
          : "",
    };

    // UPDATE

    if (existingHome) {

      const updatedHome =
        await Home.findByIdAndUpdate(
          existingHome._id,
          data,
          { new: true }
        );

      return res.status(200).json({
        message:
          "Home Updated Successfully",
        updatedHome,
      });
    }

    // CREATE

    const home =
      await Home.create(data);

    res.status(201).json({
      message:
        "Home Saved Successfully",
      home,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// GET HOME DATA

const getHomeData = async (
  req,
  res
) => {

  try {

    const home =
      await Home.findOne();

    res.status(200).json(home);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveHomeData,
  getHomeData,
};