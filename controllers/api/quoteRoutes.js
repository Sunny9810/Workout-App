// const router = require('express').Router();
// const {Quotes } = require('../../models');

// router.get('/warmup', async (req, res) => {
//     try {
//       // Get all projects and JOIN with user data
//       const quotesData = await Quotes.findAll();
  
//       // Serialize data so the template can read it
//       const quotes = quotesData.map((quotes) => quotes.get({ plain: true }));
  
//       // Pass serialized data and session flag into template
//       res.render('warmup', { 
//        quotes,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });