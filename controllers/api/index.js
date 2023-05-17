const router = require("express").Router();
const userRoutes = require("./userRoutes");
const musclegroups = require("./musclegroup-routes");

router.use("/users", userRoutes);
router.use("/mgroups", musclegroups);

module.exports = router;
