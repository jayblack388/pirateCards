const router = require("express").Router();
const piratesController = require("../../controllers/piratesController");

// Matches with "/api/pirates"
router.route("/")
  .get(piratesController.findAll)
  .post(piratesController.create);

// Matches with "/api/pirates/:id"
router
  .route("/:id")
  .get(piratesController.findById)
  .put(piratesController.update)
  .delete(piratesController.remove);

module.exports = router;
