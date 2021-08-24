var express = require('express');
var router = express.Router();
const db = require('../db/models');
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
  res.render('login', { title: 'header', token: req.csrfToken() });
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

// const userValidators = [
//   check('firstName')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for First Name')
//     .isLength({ max: 50 })
//     .withMessage('First Name must not be more than 50 characters long'),
//   check('lastName')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for Last Name')
//     .isLength({ max: 50 })
//     .withMessage('Last Name must not be more than 50 characters long'),
//   check('email')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for Email Address')
//     .isLength({ max: 255 })
//     .withMessage('Email Address must not be more than 255 characters long')
//     .isEmail()
//     .withMessage('Email Address is not a valid email')
//     .custom((value) => {
//       return db.User.findOne({ where: { email: value } })
//         .then((user) => {
//           if (user) {
//             return Promise.reject('The provided Email Address is already in use by another account');
//           }
//         });
//     }),
//   check('password')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for Password')
//     .isLength({ max: 50 })
//     .withMessage('Password must not be more than 50 characters long')
//     .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
//     .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
//   check('confirmPassword')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for Confirm Password')
//     .isLength({ max: 50 })
//     .withMessage('Confirm Password must not be more than 50 characters long')
//     .custom((value, { req }) => {
//       if (value !== req.body.password) {
//         throw new Error('Confirm Password does not match Password');
//       }
//       return true;
//     }),
// ];

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
