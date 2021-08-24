var express = require('express');
var router = express.Router();
const db = require('../db/models');
const bcrypt = require('bcryptjs');

const { check, validationResult } = require('express-validator');
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


router.get('/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('signup', {
    title: 'Signup',
    user,
    csrfToken: req.csrfToken()
  });
});

const userValidators = [
  // TODO Define the user validators.
];

router.post('/signup', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      emailAddress,
      firstName,
      lastName,
      username,
      // date of birth (bonus)
      password,
    } = req.body;

    const validatorErrors = validationResult(req);

    const hashedPassword = await bcrypt.hash(password, 10);

    if (validatorErrors.isEmpty()) {
      await db.User.create({
        emailAddress,
        firstName,
        lastName,
        username,
        hashedPassword
      });
      res.redirect('/games');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      // const user = db.User.build();

      res.render('signup', {
        title: 'Signup',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));



module.exports = router;
//testing comment
