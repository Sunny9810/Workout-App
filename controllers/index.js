const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const quoteRoutes = require('./api/quoteRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/warmup', quoteRoutes);
router.use('/', homeRoutes);  //front end
router.use('/api', apiRoutes); // back end

module.exports = router;
