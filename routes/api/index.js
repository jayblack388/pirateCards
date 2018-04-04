const router = require("express").Router();
const pirateRoutes = require("./pirates");
const crewRoutes = require("./crews");

// Pirate routes
router.use("/pirates", pirateRoutes);

router.use("/crews", crewRoutes);

module.exports = router;
