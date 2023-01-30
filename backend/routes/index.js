const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth.js');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler, reviewValidator } = require('../utils.js');
const db = require('../db/models');
const { Game, Review, GameCleanRating, Shelf, User, ReviewLike } = db;

router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
    const allGames = await Game.findAll();
    if (req.session.auth) {
      const { userId } = req.session.auth;

      res.render('splash', { title: 'Game List', userId, games: allGames, token: req.csrfToken() });
    } else {
      res.render('splash', { title: 'Game List', games: allGames, token: req.csrfToken() });
    }
    // userId ---------------- this was a param on line 13
  }));

router.get('/aboutus', csrfProtection, asyncHandler(async (req, res, next) => {
  if (req.session.auth) {
    const { userId } = req.session.auth
    res.render('aboutus', { userId, token: req.csrfToken() });
  } else {
    res.render('aboutus', {token: req.csrfToken() });
  }



}));

  module.exports = router;
