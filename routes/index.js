const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth.js');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler, reviewValidator } = require('../utils.js');
const db = require('../db/models');
const { Game, Review, GameCleanRating, Shelf, User, ReviewLike } = db;

router.get('/', asyncHandler(async (req, res, next) => {
    const allGames = await Game.findAll();
    const { userId } = req.session.auth;
    res.render('splash', { title: 'Game List', userId, games: allGames });
  }));

  module.exports = router;