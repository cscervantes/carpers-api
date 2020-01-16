var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  try{
    res.status(200).send(req.headers)
  }catch(e){
    next(e)
  }
});

require('./scrape')(router)

module.exports = router;
