var express = require('express');
var router = express.Router();

const {csrfProtection, asyncHandler} = require ('../utils.js');

/* GET users listing. */
router.get('/', asyncHandler(async(req, res, next) => {
  res.send('respond with a resource');
}));

router.get('/login',csrfProtection, asyncHandler(async(req, res, next) => {
  res.send('respond with a resource');
}));

router.post('/login',csrfProtection, asyncHandler(async(req, res, next) => {
  res.send('respond with a resource');
}));

module.exports = router;
