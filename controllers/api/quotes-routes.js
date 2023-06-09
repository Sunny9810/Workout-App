const router = require("express").Router();
const { MuscleGroup, Exercises, Quotes } = require("../../models");

// router.get("/", (req, res) => {
//   Quotes.findAll().then((QuotesData) => {
//     res.json(QuotesData);
//   });
// });


router.get("/", (req, res) => {
    Quotes.findAll({
      attributes: { exclude: ["id"] },
    }).then((quotesData) => {
    const quotesContent = quotesData.map((quote) => quote.quotes);
      res.json(quotesContent);
    });
  });


//get one quotes group
router.get("/:id", (req, res) => {
  // find a single quote by its `id'
  Quotes.findOne().then((QuotesData) => {
    res.json(QuotesData);
  });
});

//POSTING QUOTES

router.post("/create", (req,res)=>{
  Quotes.create({
  //  id:req.body.id,
   quotes:req.body.quotes,
  })
  .then((newQuotes)=>{
    res.json(newQuotes);
  })
  .catch((err) =>{
    res.json(err);
  })
});

module.exports = router;
