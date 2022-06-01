const express = require('express');
const logger = require('./logger')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('i am anik halder'+ logger.url)
    logger.log()
    res.send('My first ever api!')
});
router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});
router.get('/test-me2', function (req, res) {
    res.send('My last api!')
});


module.exports = router;
// adding this comment for no reason