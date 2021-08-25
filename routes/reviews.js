const express = require('express');
// const app = require('../app.js');
const router = express.Router();

const { requireAuth } = require('../auth.js');
const db = require('../db/models');
const { Game, Review, GameCleanRating, Shelf, User } = db;

const { csrfProtection, asyncHandler } = require('../utils.js');

router.get('/:id(\\d+)/edit', requireAuth, asyncHandler(async(req, res) => {

    res.send('Hello')

}));


module.exports = router;
