const router = require("express").Router();
const userRoutes = require("./userRoutes");
const musclegroups = require("./musclegroup-routes");
const exercises = require("./exercises-routes");
const quotes = require("./quotes-routes");

router.use("/users", userRoutes);
router.use("/mgroups", musclegroups);
router.use("/exercises", exercises);
router.use("/quotes", quotes);

module.exports = router;
