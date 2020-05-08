const Actions = require("./actionModel");

function validateActionId(req, res, next) {
  const actionId = req.params.id || req.body.user_id;
  Actions.get(actionId)
    .then((action) => {
      if (action) {
        req.action = action;
        return next();
      } else {
        res.status(400).json({ message: "that is not a valid id" });
      }
    })
    .catch(() => {
      res.status(400).json({ message: "cant fetch action from db" });
    });
}

module.exports = {
  validateActionId: validateActionId,
};
