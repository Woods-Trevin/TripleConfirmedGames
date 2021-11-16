# TripleConfirmedGames

![GIF of TripleConfirmedGames splash page](https://i.ibb.co/dfwy70p/ezgif-2-b7f3e2dc9137.gif)

## What is TripleConfirmedGames?

[TripleConfirmedGames](https://triple-confirmed-games.herokuapp.com/) is an Express-server based app utilizing PostgreSQL for the database and Pug for the frontend. TripleConfirmedGames allows users to browse a variety of games and share their thoughts on it via reviews and a 1-5 soap rating based on how 'clean' (i.e. good) they think the game is. In addition to that, users are also able to create shelves to add their games to and keep track of them that way. 

## Features

### Shelves

- Logged in users can create, update, and delete shelves to add games to. 

### Reviews

- Logged in users are able to create, update, and delete reviews on various game pages.

### Game Ratings

- Logged in users are able to submit a value from 1 to 5 soap bars indicating how 'clean' they think the game is. (i.e. how much they enjoyed it)

## Application Architecture

TripleConfirmedGames is built on an Express-based Server, utilizing PostgreSQL as the database and Pug templates for the front-end. To create the dynamic rendering for our 'wow' button without refreshing, we implemented DOM manipulation. This allowed for a seamless and uninterrupted user experience. 

## Conclusion and Next Steps

Coming back to this project now after having grown a lot as developers since then, we plan to overhaul some styling around the website as well as fixing up some functionality and providing user feedback for things such as adding games to shelves. We also plan to implement more DOM manipulation in some places as we see fit. 
