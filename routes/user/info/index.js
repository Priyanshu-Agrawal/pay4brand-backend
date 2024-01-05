const router = require('express').Router();

router.use('/get', require('./get'))

module.exports = router;