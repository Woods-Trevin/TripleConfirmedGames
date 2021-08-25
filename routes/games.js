var express = require('express');
// const app = require('../app.js');
var router = express.Router();
const { requireAuth } = require('../auth.js');
const db = require('../db/models');
const { Game, Review, GameCleanRating, Shelf, User } = db;

const { csrfProtection, asyncHandler } = require('../utils.js');
// router.use(requireAuth); this applies to all routes, but we only want it for certain paths

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const allGames = await Game.findAll();
  res.render('games', { title: 'Game List', games: allGames });
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const gameId = req.params.id;

  const games = await Game.findByPk(gameId, {
    include: [Review, GameCleanRating, Shelf]
  })
  const reviews = games.Reviews

  const reviewNames = await Review.findAll(
    {where: {
      gameId: req.params.id
    },
    include: User
  });

  res.render('game-page', {title: games.title, games, reviews, reviewNames})
}))

router.post('/:id(\\d+)', requireAuth, asyncHandler(async(req, res, next) => {
  const gameId = req.params.id;
  const {title, content} = req.body;
  const userId = res.locals.user.id
  await Review.create({
    userId,
    title: '',
    content,
    gameId
  });

  res.redirect(`/games/${gameId}`);

}));


module.exports = router;
