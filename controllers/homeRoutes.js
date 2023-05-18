const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const { Quotes } = require('../models');

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("intro", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/workout", async (req, res) => {
  res.render("workoutpage");
});


router.get('/warmup', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const projectData = await Quotes.findAll();
  
      // Serialize data so the template can read it
      const quotes = projectData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('warmup', { 
       quotes,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
