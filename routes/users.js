var express = require('express');
var router = express.Router();

const {csrfProtection, asyncHandler} = require ('../utils.js');

/* GET users listing. */
router.get('/', asyncHandler(async(req, res, next) => {
  res.send('respond with a resource');
}));

router.get('/login',csrfProtection, asyncHandler(async(req, res, next) => {
  // res.send('respond with a resource');
  res.render('login', { title: 'header', token: req.csrfToken()});
}));

router.post('/login',csrfProtection, asyncHandler(async(req, res, next) => {
  // res.send('respond with a resource');
  const { username, password } = req.body
}));

module.exports = router;
