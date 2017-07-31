/**
 * Created by lmy on 17-7-31.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('hello, express');
});

module.exports = router;

