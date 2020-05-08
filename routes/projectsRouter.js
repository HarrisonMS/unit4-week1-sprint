const express = require("express");
const router = express.Router();
const Projects = require("../data/helpers/projectModel");

//get all Projects in database

router.get("/", (req, res) => {
  Projects.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ errorMessage: error.message });
    });
});

module.exports = router;
