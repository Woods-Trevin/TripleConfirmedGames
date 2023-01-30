var express = require('express');
var router = express.Router();
const { requireAuth } = require('../auth.js');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler, reviewValidator } = require('../utils.js');
const db = require('../db/models');
const { Game, Review, GameCleanRating, Shelf, Shelves, User, GameJoin, ReviewLike, SlapOn } = db;

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
  const allGames = await Game.findAll();
  if (req.session.auth) {
    const { userId } = req.session.auth
    res.render('games', { title: 'Clean Games', userId, games: allGames, token: req.csrfToken() });
  } else {
    res.render('games', { title: 'Clean Games', games: allGames, token: req.csrfToken() });
  }
  //  <<<<<<--------- was in line 14
}));

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
  const reviewId = parseInt(req.params.id, 10);
  // if (!req.session.auth) {

  // }
  if (req.session.auth) {
    const currentUser = req.session.auth.userId;
    const reviewLike = await ReviewLike.findAll({
      where: { reviewId }
    });

    const totalLikes = reviewLike.length;
    // console.log(`--------------->>>>>${totalLikes}`);
    // console.log(`--------------->>>>>${reviewLike}`);
    // console.log(`--------------->>>>>${reviewId}`);

    const gameId = req.params.id;

    const games = await Game.findByPk(gameId, {
      include: [{ model: Review, include: [ReviewLike, User] }, GameCleanRating, Shelf]
    })

    // console.log(games.Reviews);
    const reviews = games.Reviews
    let notExists = true;
    reviews.forEach(review => {
      if (review.userId === currentUser) {
        notExists = false;
      }
    })


    const reviewNames = await Review.findAll(
      {
        where: {
          gameId: req.params.id
        },
        include: User
      });

    const shelves = await Shelf.findAll({
      where: {
        userId: currentUser
      }
    });

    // console.log(shelves);

    const GamesOnShelf = await SlapOn.findAll(
      {
        where: {
          gameId: req.params.id
        }, include: Shelves,
      });

    // console.log(GamesOnShelf);
    let shelfIds = []
    for (let i = 0; i < GamesOnShelf.length; i++) {
      // console.log(GamesOnShelf[i].shelfId, "GAMES------------------------------------");
      shelfIds.push(GamesOnShelf[i].shelfId);
    }

    const GameCurrentShelves = await Shelf.findAll({
      where: {
        id: shelfIds
      }
    })

    // console.log(GameCurrentShelves)
    // for (let i = 0; i < GameCurrentShelves.length; i++) {
    //   console.log(GameCurrentShelves[i].name)
    // }

    const usersReviewLikesArr = await ReviewLike.findAll(
      {
        where: {
          userId: currentUser
        }
      }
    );

    let usersWowsArr = [];

    usersReviewLikesArr.forEach(element => {
      usersWowsArr.push(element.dataValues.reviewId)
    });

    res.render('game-page', { title: games.title, games, reviews, GameCurrentShelves, reviewId, gameId, userId: currentUser, shelves, reviewNames, totalLikes, usersWowsArr, notExists, token: req.csrfToken() })


  } else {
    const reviewLike = await ReviewLike.findAll({
      where: { reviewId }
    });

    const totalLikes = reviewLike.length;
    // console.log(`--------------->>>>>${totalLikes}`);
    // console.log(`--------------->>>>>${reviewLike}`);
    // console.log(`--------------->>>>>${reviewId}`);

    const gameId = req.params.id;

    const games = await Game.findByPk(gameId, {
      include: [{ model: Review, include: [ReviewLike, User] }, GameCleanRating, Shelf]
    })

    // console.log(games.Reviews);
    const reviews = games.Reviews

    const reviewNames = await Review.findAll(
      {
        where: {
          gameId: req.params.id
        },
        include: User
      });

    res.render('game-page', { title: games.title, games, reviews, reviewId, gameId, reviewNames, totalLikes, token: req.csrfToken() })

  }
}))

router.post('/:id(\\d+)', csrfProtection, reviewValidator, requireAuth, asyncHandler(async (req, res, next) => {
  const gameId = req.params.id;
  const { title, content } = req.body;
  const userId = res.locals.user.id
  const games = await Game.findByPk(gameId, {
    include: [{ model: Review, include: [ReviewLike, User] }, GameCleanRating, Shelf]
  })
  const reviews = games.Reviews

  const reviewNames = await Review.findAll(
    {
      where: {
        gameId: req.params.id
      },
      include: User
    });

  const shelves = await Shelf.findAll({
    where: {
      userId: userId
    }
  });

  let errors = [];
  const validatorErrors = validationResult(req);

  const gameExists = await GameJoin.findOne({
    where: {
      userId: userId,
      gameId: gameId
    }
  })


  if (validatorErrors.isEmpty()) {
    const user = {
      userId,
      title: '',
      content,
      gameId
    }
    // console.log(user);
    await Review.create(user);
    if (!gameExists) {
      // console.log('added game')
      await GameJoin.create({
        userId,
        gameId
      })

    } else {
      // console.log('deleted game')
      // GameJoin.delete({
      //   userId,
      //   gameId
      // })
      gameExists.destroy()
    }

    res.redirect(`/games/${gameId}`);
  } else {
    // console.log("Error creating review");
    errors = validatorErrors.array().map((error) => error.msg);
    res.render('game-page', { title: games.title, games, reviews, reviewNames, shelves, errors, token: req.csrfToken() })
    // const user = User.build();
  }
  // console.log('---------------------------------------------------------------------------')
  // console.log(errors);

  // res.redirect(`/games/${gameId}`)
}));

//gets data and sends back to dom file
router.post('/:id(\\d+)/:reviewId(\\d+)', asyncHandler(async (req, res, next) => {
  const reviewId = parseInt(req.params.reviewId, 10);
  // const allLikes = await ReviewLike.findAll({
  //   where: {reviewId}
  // });
  const currentUser = req.session.auth.userId;
  // console.log("--------->>>>>> IN WRONG ROUTER");
  const { soap } = req.body
  // console.log("--------->>>>>>", soap);
  const reviewLike = await ReviewLike.findOne({
    where: { reviewId, userId: currentUser }
  });
  if (reviewLike) {
    await reviewLike.destroy();
  } else {
    await ReviewLike.create({
      like: true,
      reviewId,
      userId: currentUser
    });
  }
  const allLikes = await ReviewLike.findAll({
    where: { reviewId }
  });

  const totalLikes = allLikes.length;
  // console.log('TOTAL LIKES -------------')
  // console.log(totalLikes);
  res.json({ totalLikes, reviewId })
}));


router.post('/:id(\\d+)/rating', asyncHandler(async (req, res, next) => {
  const gameId = parseInt(req.params.id, 10);
  const currentUser = req.session.auth.userId;

  // console.log("IN RATING ROUTER");

  const { soap } = req.body

  // console.log(soap)

  const findRating = await GameCleanRating.findOne({
    where: { gameId, userId: currentUser }
  });

  if (findRating) {
    await findRating.update({ rating: soap });

    const allRatings = await GameCleanRating.findAll({
      where: { gameId }
    });
    // console.log('allRatings ========= >>>', allRatings);
    // console.log('FIRST RATING IN OBJECT------', allRatings[0].rating);

    let counter = 0;
    allRatings.forEach(element => {
      counter += element.rating
    });

    const rates = counter / allRatings.length

    const roundedRates = parseFloat(rates.toFixed(1));

    // console.log('RATES ------------>', parseFloat(roundedRates))

    const game = await Game.findByPk(gameId)

    await game.update({ avgCleanRating: roundedRates })
  } else {
    await GameCleanRating.create({
      rating: soap,
      userId: currentUser,
      gameId: gameId
    });

    const allRatings = await GameCleanRating.findAll({
      where: { gameId }
    });
    // console.log('allRatings ========= >>>', allRatings);
    // console.log('FIRST RATING IN OBJECT------', allRatings[0].rating);

    let counter = 0;
    allRatings.forEach(element => {
      counter += element.rating
    });

    const rates = counter / allRatings.length

    const roundedRates = parseFloat(rates.toFixed(1));

    // console.log('RATES ------------>', roundedRates);

    const game = await Game.findByPk(gameId)

    await game.update({ avgCleanRating: roundedRates })

  }

  //   const allRatings = await GameCleanRating.findAll({
  //     where: {gameId}
  //   });
  // console.log(allRatings);
  // // keying into allRatings wrong????
  // // what is allRatings actually giving us back in the array???
  //   const avg = () => {
  //     let counter = 0;
  //     allRatings.forEach(element => {
  //       counter += element.rating
  //     });
  //    return counter/allRatings.length
  //   }

  //   const game = await Game.findByPk(gameId)

  //   await game.update({avgCleanRating: avg})

  res.redirect(`/games/${gameId}`)

}))


module.exports = router;
