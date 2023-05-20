const router = require("express").Router();
const { MuscleGroup, Exercises, Quotes } = require("../../models");

router.get("/", (req, res) => {
  Quotes.findAll().then((QuotesData) => {
    res.json(QuotesData);
  });
});

// get one quotes group
// router.get("/:id", (req, res) => {
//   // find a single quote by its `id'
//   Quotes.findOne().then((QuotesData) => {
//     res.json(QuotesData);
//   });
// });

module.exports = router;
