const express = require("express");
const router = express.Router();
const Actions = require("../data/helpers/actionModel");
const { validateActionPost } = require("../data/helpers/validatePostMid");

//get all actions from the database
router.get("/", (req, res) => {
  Actions.get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ errorMessage: error.message });
    });
});

//gets action by action id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Actions.get(id)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ errorMessage: error.message });
    });
});

//time to post an action
router.post("/", validateActionPost, (req, res) => {
  const actionBody = req.body;
  Actions.insert(actionBody)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ errorMessage: error.message });
    });
});
module.exports = router;
