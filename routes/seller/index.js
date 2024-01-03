const router = require('express').Router();

router.use('/register', require('./register'));
router.use('/products', require('./products'));

module.exports = router