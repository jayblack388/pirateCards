const router = require("express").Router();
const piratesController = require("../../controllers/piratesController");

// Matches with "/api/pirates"
router.route("/")
  .get(piratesController.findAll)
  .post(piratesController.create);

// Matches with "/api/pirates/:id"
router.route("/:crew")
  .get(piratesController.findByCrew)
  .post(piratesController.create);

module.exports = router;
