const express = require("express");
const router = express.Router();
const Projects = require("../data/helpers/projectModel");
const { validateProjectId } = require("../data/helpers/validateId");
const { validateProjectPost } = require("../data/helpers/validatePostMid");

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

// gets all actions correlated with the project id
router.get("/:id/actions", validateProjectId, (req, res) => {
  const { id } = req.params;
  Projects.getProjectActions(id)
    .then((actions) => {
      console.log(actions);
      res.status(200).json(actions);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ errorMessage: error.message });
    });
});

router.post("/", validateProjectPost, (req, res) => {
  const projData = req.body;
  Projects.insert(projData)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ errorMessage: error.message });
    });
});

module.exports = router;
