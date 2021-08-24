var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { User } = db;
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth');

const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler, userValidators, loginValidator } = require('../utils.js');

/* GET users listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.send('respond with a resource');
}));


router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  // res.send('respond with a resource');
  res.render('login', { title: 'header', token: req.csrfToken(), locals: req.locals.authenticated });
}));

router.post('/login', loginValidator, csrfProtection, asyncHandler(async (req, res, next) => {
  console.log("Literally Anything!")
  // res.send('respond with a resource');
  const { username, password } = req.body

  let errors = [];
  const validatorErrors = validationResult(req);
  console.log("before validator")

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { username } });
    console.log("below user query")
    if (user !== null) {
      console.log("in user if")
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString())
      if (passwordMatch) {
        console.log("password match if")

        //TODO login the user.
        loginUser(req, res, user);
        return res.redirect('/games');
      }
    }
    // Password12!

    errors.push('Login failed for the provided email address and password')
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('user-login', {
    title: 'Login',
    username,
    password,
    errors,
    csrfToken: req.csrfToken(),
  });


}));


router.get('/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('signup', {
    title: 'Signup',
    user,
    csrfToken: req.csrfToken()
  });
});


router.post('/signup', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      firstName,
      lastName,
      username,
      // date of birth (bonus)
      password,
    } = req.body;

    const validatorErrors = validationResult(req);

    const hashedPassword = await bcrypt.hash(password, 10);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.create({
        email,
        firstName,
        lastName,
        username,
        hashedPassword
      });
      loginUser(req, res, user)
      res.redirect('/games');
    } else {
      console.log("ERROR HERE");
      const errors = validatorErrors.array().map((error) => error.msg);
      const user = db.User.build();

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
