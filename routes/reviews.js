const express = require('express');
// const app = require('../app.js');
const router = express.Router();

const { requireAuth } = require('../auth.js');
const db = require('../db/models');
const { Game, Review, GameCleanRating, Shelf, User } = db;

const { csrfProtection, asyncHandler } = require('../utils.js');

router.get('/:id(\\d+)/edit', requireAuth, asyncHandler(async(req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    console.log(reviewId);
    const review = await Review.findByPk(reviewId);
    res.render('review-edit', {
      title: 'Edit Review',
      review
    });

}));

router.post('/:id(\\d+)/edit', requireAuth, asyncHandler(async(req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const oldReview = await Review.findByPk(reviewId);

    const {content} = req.body;
    const username = res.locals.user.id
    const newReview = {
        userId: username,
        title: '',
        content,
        gameId: oldReview.gameId
    };

    await oldReview.update(newReview)

    res.redirect(`/games/${newReview.gameId}`);

}));

router.get('/:id(\\d+)/delete', requireAuth, asyncHandler(async(req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const gameId = req.params.id;
    console.log(req.params);
    console.log(reviewId);

    const oldReview = await Review.findByPk(reviewId);

    const review = await Review.findByPk(reviewId);
    res.render('review-delete', {
      title: 'Delete Review',
      review,
      gameId: oldReview.gameId
    });

}));

router.post('/:id(\\d+)/delete', requireAuth,
  asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await Review.findByPk(reviewId);

    // checkPermissions(book, res.locals.user);

    await review.destroy();
    res.redirect(`/games/${review.gameId}`);
}));


module.exports = router;
