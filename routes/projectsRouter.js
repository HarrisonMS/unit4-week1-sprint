const express = require("express");
const router = express.Router();
const Projects = require("../data/helpers/projectModel");
const { validateProjectId } = require("../data/helpers/validateId");

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

// gets project by project id
router.get("/:id", validateProjectId, (req, res) => {
  const { id } = req.params;
  Projects.get(id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ errorMessage: error.message });
    });
});
module.exports = router;
