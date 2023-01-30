
const db = require('./db/models');

// creating auth key
const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

// remove auth key
const logoutUser = (req, res) => {
  delete req.session.auth;
};

// restricting routes to logged in users
const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/users/login');
  }
  return next();
};

const restoreUser = async (req, res, next) => {

  // if we need to debug use consolelog line 27
//   console.log(req.session);

  if (req.session.auth) {
    // find user if logged in
    const { userId } = req.session.auth;

    try {
      const user = await db.User.findByPk(userId);

      if (user) {
        // add user to response for use in next middleware
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (err) {
      // user doesnt exist
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    // no auth key
    res.locals.authenticated = false;
    next();
  }
};

module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser,
};
