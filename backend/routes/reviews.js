const express = require('express');
// const app = require('../app.js');
const router = express.Router();

const { requireAuth } = require('../auth.js');
const db = require('../db/models');
const { Game, Review, GameCleanRating, Shelf, User, ReviewLike } = db;

const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler, reviewValidator } = require('../utils.js');

router.get('/:id(\\d+)/edit', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  const reviewId = parseInt(req.params.id, 10);
  // console.log(reviewId);
  const review = await Review.findByPk(reviewId);
  res.render('review-edit', {
    title: 'Edit Review',
    review,
    token: req.csrfToken()
  });

}));

router.post('/:id(\\d+)/edit', csrfProtection, requireAuth, reviewValidator, asyncHandler(async (req, res) => {
  const reviewId = parseInt(req.params.id, 10);
  const oldReview = await Review.findByPk(reviewId);
  const { content } = req.body;
  const username = res.locals.user.id
  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const newReview = {
      userId: username,
      title: '',
      content,
      gameId: oldReview.gameId,
    };

    await oldReview.update(newReview)
    res.redirect(`/games/${newReview.gameId}`);
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
    res.render('review-edit', {
      title: 'Edit Review',
      review: oldReview,
      token: req.csrfToken(),
      errors
    });
    // const user = User.build();
  }
  //handle validation errors here
}));

router.get('/:id(\\d+)/delete', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  const reviewId = parseInt(req.params.id, 10);
  const gameId = req.params.id;
  // console.log(req.params);
  // console.log(reviewId);

  const oldReview = await Review.findByPk(reviewId);

  const review = await Review.findByPk(reviewId);
  res.render('review-delete', {
    title: 'Delete Review',
    review,
    gameId: oldReview.gameId,
    token: req.csrfToken()
  });

}));

router.post('/:id(\\d+)/delete', csrfProtection, requireAuth,
  asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await Review.findByPk(reviewId);

    // checkPermissions(book, res.locals.user);

    await review.destroy();
    res.redirect(`/games/${review.gameId}`);
  }));


router.post('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const reviewId = parseInt(req.params.id, 10);
  const currentUser = req.session.auth.userId;
  // const reviewLike = await ReviewLike.findOne({
  //   where: {reviewId, userId: currentUser}
  // });
  // if (reviewLike){
  //     await reviewLike.destroy();
  // } else {
  //   await ReviewLike.create({
  //     like: true,
  //     reviewId,
  //     userId: currentUser
  //   });
  // }
  //fetch all review likes from this review with findall for all review likes where review id
  // return in json format the
  //res.send (key total likes, send back review Id)
  //send back to the script
  //const res = await fetch to this url method post, no body, headers content type application/json
  //after fetch made, check status of variable
  //if res.ok is not true or not 200, then throw res
  //if res.ok is ok or 200, res.json, have object with updated number of review likes
  //grab the specific div on pug displaying the likes, give it id or name field
  //

}));

module.exports = router;
