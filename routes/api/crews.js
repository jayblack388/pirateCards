const router = require("express").Router();
const piratesController = require("../../controllers/piratesController");

// Matches with "/api/pirates"
router.route("/")
  .get(piratesController.findAllCrews)
  .post(piratesController.create);

module.exports = router;