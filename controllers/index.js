const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);  //front end
router.use('/api', apiRoutes); // back end

module.exports = router;
