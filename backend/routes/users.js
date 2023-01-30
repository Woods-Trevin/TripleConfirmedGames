var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { User, Shelf, Game, Review, ReviewLike, GameCleanRating, GameJoin, SlapOn } = db;
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser, requireAuth } = require('../auth');
// const fs = require('fs');

const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler, userValidators, loginValidator, shelfNameValidator } = require('../utils.js');
// const { ResultWithContext } = require('express-validator/src/chain');



/* GET users listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.send('respond with a resource');
}));


router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  // res.send('respond with a resource');
  res.render('login', { title: 'header', token: req.csrfToken() });
}));

router.post('/login', loginValidator, csrfProtection, asyncHandler(async (req, res, next) => {
  // console.log("Literally Anything!")
  // res.send('respond with a resource');
  const { username, password } = req.body

  let errors = [];
  const validatorErrors = validationResult(req);
  // console.log("before validator")

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { username } });
    // console.log("below user query")
    if (user !== null) {
      // console.log("in user if")
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString())
      if (passwordMatch) {
        // console.log("password match if")

        //TODO login the user.
        loginUser(req, res, user);
        return res.redirect('/games');
      }
    }
    // Password12!

    errors.push('Login failed for the provided email address and password')
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('user-login', {
    title: 'Login',
    username,
    password,
    errors,
    csrfToken: req.csrfToken(),
  });


}));

router.post('/logout', (req, res, next) => {
  logoutUser(req, res);
  res.redirect('/');
});


router.get('/signup', csrfProtection, (req, res, next) => {
  const user = User.build();
  res.render('signup', {
    title: 'Signup',
    user,
    csrfToken: req.csrfToken()
  });
});


router.post('/signup', csrfProtection, userValidators,
  asyncHandler(async (req, res, next) => {
    const {
      email,
      firstName,
      lastName,
      username,
      // date of birth (bonus)
      password,
    } = req.body;

    const validatorErrors = validationResult(req);

    const hashedPassword = await bcrypt.hash(password, 10);

    if (validatorErrors.isEmpty()) {
      const user = await User.create({
        email,
        firstName,
        lastName,
        username,
        hashedPassword
      });
      loginUser(req, res, user)

      // find newly registered users id
      // const userObject = await User.findOne({
      //   where: { username: username }
      // });
      // create default shelves
      await Shelf.create(
        // { name: 'Currently Playing', userId: userObject.id },
        { name: 'Currently Playing', userId: user.id },
      );
      await Shelf.create(
        // { name: 'Wishlist', userId: userObject.id }
        { name: 'Wishlist', userId: user.id }
      );
      await Shelf.create(
        // { name: 'Completed', userId: userObject.id }
        { name: 'Completed', userId: user.id }
      );
      //--------------
      res.redirect('/games');
    } else {
      // console.log("ERROR HERE");
      const errors = validatorErrors.array().map((error) => error.msg);
      const user = User.build();

      res.render('signup', {
        title: 'Signup',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
  const { userId } = req.session.auth;
  // const user = await User.findByPk(req.params.id, {
  //   include: [GameCleanRating, {
  //     model: Game,
  //     // where: {userId: req.params.id},
  //     include: [Shelf, Review]
  //   }]
  // });

  const user = await User.findByPk(userId, {
    include: [GameCleanRating, {
      model: Game,
      include: [{
        model: Shelf,
        where: { userId: userId }
      },
      Review]
    }]
  });




  // const user = await User.findByPk(userId, {
    //   include: [GameCleanRating, {
      //     model: Game,
      //     include: [Shelf, Review]
      //   }]
      // });



      const games = await Game.findAll({
        include: [Review, Shelf, GameCleanRating]
      })

      const gamesOnShelvesOrReviews = {}
      games.forEach(game => {
        game.Shelves.forEach(shelf => {
          if (shelf.userId === userId) {
            gamesOnShelvesOrReviews[game.id] = game
          }
        })
        game.Reviews.forEach(review => {
          if (review.userId === userId) {
            gamesOnShelvesOrReviews[game.id] = game
          }
        })
        game.GameCleanRatings.forEach(rating => {
          if (rating.userId === userId) {
            gamesOnShelvesOrReviews[game.id] = game
          }
        })
      })

      userGamesArr = Object.values(gamesOnShelvesOrReviews)

      // const shelvesObj = []

      const shelves = await Shelf.findAll({
        where: {
          userId: req.params.id,
        }, include: Game
      })
      // console.log(shelves)
      //grabbing number of games tied to a certain shelf through query above and adding them to an
      //array.
      // const numOfGames = []
      // shelves.forEach(element => {
        //   const num = element.Games
        //   numOfGames.push(num.length)
        // })

        // console.log(numOfGames)

        // const shelves = await Shelf.findAll()
        //Cleaaaan


        // const namedShelves = []
        // shelves.forEach(element => {
          //   namedShelves.push(element.name)
          // });



          const review = await Review.findAll({
            where: {
              userId: req.params.id
            }
          })
          // console.log(user.Games)

          const reviewLikes = await ReviewLike.findAll({
            where: {
              userId: req.params.id
            }
          });

          const totalReviewLikes = reviewLikes.length;

          const totalReviews = review.length;

          const totalShelves = shelves.length
          const gamesInteractedWith = userGamesArr.length
          //games interacted with doesnt account for likes so I decided to not include it
          const dateString = user.createdAt.toString()

          const dateArr = [...dateString.split(" ")];
          const newDateArr = dateArr.slice(0,4)
          const formattedDate = newDateArr.join(' ')

          // console.log('=======>', formattedDate)


          // console.log('=========@@@===>', user.Games)

          res.render('profile', {
            title: 'This is a profile page',
            review,
            shelves,
            user,
            userId,
            totalReviews,
            totalReviewLikes,
            userGamesArr,
            totalShelves,
            gamesInteractedWith,
            formattedDate
  })

}))

router.get('/:id(\\d+)/mygames', requireAuth, asyncHandler(async (req, res, next) => {
  const { userId } = req.session.auth
  // console.log(userId)


  // const userGames = await GameJoin.findAll({
  //   where: {
  //     userId
  //   }, include: Game
  // })

  // userGamesArr = [];
  // for (key in userGames) {
  //   console.log("Here!!")
  //   userGamesArr.push(userGames[key].Game)
  // }

  // console.log(userGamesArr);


  const user = await User.findByPk(userId, {
    include: [GameCleanRating, {
      model: Game,
      include: [{
        model: Shelf,
        where: { userId: userId }
      }, Review]
    }]
  });


  const shelves = await Shelf.findAll({
    where: {
      userId: req.params.id,
    }, include: Game
  })

  const shelf = await Shelf.findAll({
    where: {
      userId: req.params.id,
    }, include: Game
  })
  // const shelves = await Shelf.findAll({
  //   where: {
  //     userId: req.params.id,
  //   }, include: Game
  // })
  // console.log('SHELVES ON USERSJS ROUTE ------->>>>>>>', userId)

  res.render('mygames', { title: 'My Games', userId, shelves, user })
}));



// router.post('/:id(\\d+)/mygames', requireAuth, asyncHandler(async (req, res, next) => {
//   // const { userId } = req.session.auth
//   // console.log(userId)

//   // const users = await User.findByPk(userId, {
//   //   include: [Shelf, Game]
//   // });
//   // const shelves = await Shelf.findAll({
//   //   where: {
//   //     userId: req.params.id,
//   //   }, include: Game
//   // })

//   // res.render('mygames', { title: 'My Games', userId, shelves })
// }));


//add shelf page get route
router.get('/:id(\\d+)/addShelf', requireAuth, asyncHandler(async (req, res, next) => {
  const { userId } = req.session.auth

  // const shelves = await Shelf.findAll({
  //   where: {
  //     name: name
  //   }
  // })

  res.render('addShelf', { title: 'My Games', userId })
}));

//add shelf page post route
router.post('/:id(\\d+)/addShelf', requireAuth, shelfNameValidator, asyncHandler(async (req, res, next) => {
  const { userId } = req.session.auth
  const { name } = req.body
  const shelves = await Shelf.findOne({
    where: {
      name: name
    }
  })
  try {
    if (!shelves) {
      await Shelf.create({
        name,
        userId
      })
      res.redirect(`/users/${userId}/mygames`)
    } else {
      res.render('addShelf', {
        title: 'Add Shelf Name',
        shelves,
        userId

      })
    }
  } catch (e) {
    next(e)
  }

}));



//Delete shelf page get route
router.get('/:id(\\d+)/deleteShelf', requireAuth, asyncHandler(async (req, res, next) => {
  const { userId } = req.session.auth

  // const shelves = await Shelf.findAll({
  //   where: {
  //     name: name
  //   }
  // })

  res.render('deleteShelf', { title: 'Delete Shelf', userId })
}));

//Delete shelf page post route
router.post('/:id(\\d+)/deleteShelf', requireAuth, shelfNameValidator, asyncHandler(async (req, res, next) => {
  const { userId } = req.session.auth
  const { name } = req.body
  const shelves = await Shelf.findOne({
    where: {
      name: name
    }
  })
  try {
    if (!shelves) {
      res.render('deleteShelf', {
        title: 'Add Shelf Name',
        shelves,
        userId
      })
    } else {

      await shelves.destroy();
      res.redirect(`/users/${userId}/mygames`)

    }
  } catch (e) {
    next(e)
  }

}));





router.post('/:id(\\d+)/mygames/:shelfName', asyncHandler(async (req, res) => {
  const shelfName = req.params.shelfName
  const userId = parseInt(req.params.id, 10);
  // console.log('@@@@@@@@@@', userId)
  // console.log(shelfName)

  const user = await User.findByPk(userId, {
    include: [GameCleanRating, {
      model: Shelf,
      where: {
        name: shelfName,
        userId: userId
      },
      include: Game,

    }, Review]
  });
  // console.log('OOOOOOOOOOOOOOOO', shelfName);
  // console.log(user.Shelves);

  // const shelf = await Shelf.findAll({
  //   where: {
  //     name: shelfName,
  //     userId: userId
  //   },
  //   include: [ Game, Review ]
  // })
  // console.log(shelf);

  res.json({ user })

}))


//add game to shelf
router.post('/:id(\\d+)/addGame/:gameId(\\d+)', requireAuth, shelfNameValidator, asyncHandler(async (req, res, next) => {
  const { userId } = req.session.auth
  const { shelfId } = req.body
  const gameId = req.params.gameId
  const slapOn = await SlapOn.findOne({
    where: {
      shelfId: shelfId,
      gameId: gameId
    }
  })

  await GameJoin.create({
    userId,
    gameId
  })

  try {
    if (!slapOn) {
      await SlapOn.create({
        shelfId: shelfId,
        gameId: gameId
      })
      res.redirect(`/games/${gameId}`)
    } else {

      await slapOn.destroy();
      res.redirect(`/games/${gameId}`)
    }
  } catch (e) {
    next(e)
  }

}));



// router.post(`/:id(\\d+)/addDeleteShelf`, requireAuth, shelfNameValidator, asyncHandler(async (req, res, next) => {
//   const { userId } = req.session.auth
//   const { name } = req.body
//   // const name = JSON.parse(nameNotParsed)

//   console.log('---------------- in router', name)
//   const shelves = await Shelf.findOne({
//     where: {
//       name: name,
//       // userId: userId
//     }
//   })

//   const shelf = await Shelf.findAll({
//     where: {
//       userId: userId,
//     }, include: Game
//   })

//   try {
//     console.log('---------------- in try')
//     if (!shelves) {
//       console.log('---------------- in if')
//       const newShelf = await Shelf.create({
//         name,
//         userId
//       })
//       const shelfName = newShelf.name
//       const message = `Created ${name} shelf!`;
//       res.redirect(`users/${userId}/mygames`)
//       // res.json({ shelfName, message, shelf });

//     } else {

//       const newShelf = await shelves.destroy();
//       const message = `Deleted ${name} shelf!`;
//       res.redirect(`users/${userId}/mygames`)
//       // res.json({ message });

//     }
//   } catch (e) {
//     next(e)
//   }

// }));









module.exports = router;
// module.exports = { userID }

//testing comment
//demo user1 pass- Password12!
