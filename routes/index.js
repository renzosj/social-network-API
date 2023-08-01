const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) =>
 res.send('You took the wrong route and have veered off the trodden path. You have died of dysentery.'));

module.exports = router;
