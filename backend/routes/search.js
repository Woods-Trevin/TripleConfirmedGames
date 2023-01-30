const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth.js');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler, reviewValidator } = require('../utils.js');
const db = require('../db/models');
const { Game, Review, GameCleanRating, Shelf, Shelves, SlapOn, User, ReviewLike } = db;
const url = require('url');
const querystring = require('querystring');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {


    let rawSearchVal = req.query.searchVal;

    let searchVal = rawSearchVal.toLowerCase();

    // console.log('THIS IS SEARCHVALLLLLL',searchVal);

    const foundGames = await Game.findAll({
        where: {
            title: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', searchVal + '%')
        }
    });

    // asset_name: sequelize.where(sequelize.fn('LOWER', sequelize.col('asset_name')), 'LIKE', '%' + lookupValue + '%')

    // console.log('THIS IS FOUNDGAMESSSSSSS',foundGames);


    if (foundGames.length === 1) {

        // const reviewId = parseInt(req.params.id, 10);

        // }
        if (req.session.auth) {
            const currentUser = req.session.auth.userId;
            // const reviewLike = await ReviewLike.findAll({
            //     where: { reviewId }
            // });

            // const totalLikes = reviewLike.length;
            // console.log(`--------------->>>>>${totalLikes}`);
            // console.log(`--------------->>>>>${reviewLike}`);
            // console.log(`--------------->>>>>${reviewId}`);

            const gameId = foundGames[0].id;

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
                        gameId
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
                        gameId
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


            res.render('game-page', { title: games.title, games, reviews, GameCurrentShelves, gameId, userId: currentUser, shelves, reviewNames, usersWowsArr, notExists, token: req.csrfToken() })
        } else {
            // const reviewLike = await ReviewLike.findAll({
            //     where: { reviewId }
            // });

            // const totalLikes = reviewLike.length;
            // console.log(`--------------->>>>>${totalLikes}`);
            // console.log(`--------------->>>>>${reviewLike}`);
            // console.log(`--------------->>>>>${reviewId}`);

            // const gameId = req.params.id;
            const gameId = foundGames[0].id;

            const games = await Game.findByPk(gameId, {
                include: [{ model: Review, include: [ReviewLike, User] }, GameCleanRating, Shelf]
            })

            // console.log(games.Reviews);
            // const reviews = games.Reviews

            // const reviewNames = await Review.findAll(
            //     {
            //         where: {
            //             gameId: req.params.id
            //         },
            //         include: User
            //     });

            // res.render('game-page', { title: games.title, games, reviews, gameId, reviewNames, totalLikes, token: req.csrfToken() })
            res.render('game-page', { title: games.title, games, gameId, token: req.csrfToken() })

        }
    } else if (foundGames.length === 0) {
        let noResults = true;
        res.render('searchPage', {noResults})
    } else {
        if (req.session.auth) {
            const { userId } = req.session.auth
            res.render('searchPage', { title: 'Clean Games', userId, games: foundGames, token: req.csrfToken() });
        } else {
            res.render('searchPage', { title: 'Clean Games', games: foundGames, token: req.csrfToken() });
        }
    }

    // do query with starts with
    // if result array length is more than 1, then go to search results page with game tiles
    // else if its 1 then go to game page directly
    // else if 0 go to results page aand show "no results"


    // if noResults is true then render "no results"


}));


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


module.exports = router;
