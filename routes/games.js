var express = require('express');
const app = require('../app.js');
var router = express.Router();
const { requireAuth } = require('../auth.js');
const db = require('../db/models');
const { Game } = db;

const { csrfProtection, asyncHandler } = require('../utils.js');
// router.use(requireAuth); this applies to all routes, but we only want it for certain paths

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const allGames = await Game.findAll();
  res.render('games', { title: 'Game List', games: allGames });
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const gameId = req.params.id;
  const game = await Game.findByPk(gameId, {
    include: [Review, GameCleanRating, Shelf]
  })
}))

module.exports = router;
