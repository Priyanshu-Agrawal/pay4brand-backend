const router = require('express').Router();

router.use('/cart', require('./cart'))
router.use('/wishlist', require('./wishlist'))

module.exports = router