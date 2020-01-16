var express = require('express');
var router = express.Router();
const createError = require('http-errors')

/* GET home page. */
router.get('/', function(req, res, next) {
  try{
    res.status(200).send(req.headers)
  }catch(e){
    next(createError(e))
  }
});

require('./scrape')(router)

module.exports = router;
