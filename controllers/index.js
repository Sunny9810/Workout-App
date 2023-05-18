const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const quoteRoutes = require('./api/quoteRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/warmup', quoteRoutes);

module.exports = router;
