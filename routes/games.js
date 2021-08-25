var express = require('express');
const app = require('../app.js');
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
  // console.log(reviews);
  // console.log(users)

  const reviewNames = await Review.findAll(
    {where: {
      gameId: req.params.id
    },
    include: User
  });

  // console.log(reviewNames[0].User)
  // const userReviews = [];
  // reviewNames.forEach(element => {
  //   userReviews.push(element.User.username)
  // });
  // console.log(userReviews);


  // const userIds = reviews.map(review => review.userId);
  // console.log(userIds);
  // const users = await userIds.map(async id => await User.findByPk(id));
  // console.log(users);
  res.render('game-page', {title: games.title, games: games, reviews: reviews, reviewNames})
}))

module.exports = router;
