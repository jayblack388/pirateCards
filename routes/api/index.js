const router = require("express").Router();
const pirateRoutes = require("./pirates");

// Pirate routes
router.use("/pirates", pirateRoutes);

module.exports = router;
