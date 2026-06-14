// ================= POEM ROUTES =================

const express = require("express");

const {
  createPoem,
  getPoems,
  getSinglePoem,
  deletePoem,
  updatePoem,
} = require("../controllers/poemController");

const upload = require("../middleware/upload");

const router = express.Router();


// ================= CREATE POEM =================

router.post(
  "/create-poem",
  upload.single("image"),
  createPoem
);


// ================= GET ALL POEMS =================

router.get(
  "/",
  getPoems
);


// ================= GET SINGLE POEM =================

router.get(
  "/:id",
  getSinglePoem
);


// ================= DELETE POEM =================

router.delete(
  "/delete/:id",
  deletePoem
);


// ================= UPDATE POEM =================

router.put(
  "/update/:id",
  upload.single("image"),
  updatePoem
);

module.exports = router;