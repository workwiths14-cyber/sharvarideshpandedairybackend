// ================= thoughtRoutes.js =================

const express = require("express");

const {
  createThought,
  getThoughts,
  getSingleThought,
  deleteThought,
  updateThought,
} = require("../controllers/thoughtController");

const upload = require("../middleware/upload");

const router = express.Router();


// ================= CREATE THOUGHT =================

router.post(
  "/create-thought",
  upload.single("image"),
  createThought
);


// ================= GET ALL THOUGHTS =================

router.get(
  "/",
  getThoughts
);


// ================= GET SINGLE THOUGHT =================

router.get(
  "/:id",
  getSingleThought
);


// ================= DELETE THOUGHT =================

router.delete(
  "/delete/:id",
  deleteThought
);


// ================= UPDATE THOUGHT =================

router.put(
  "/update/:id",
  upload.single("image"),
  updateThought
);

module.exports = router;