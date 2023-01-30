'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Reviews'


module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(options, [
    {title: 'Great Game!', content: 'Bad game gets boring after a Month.', userId:1 , gameId:1, createdAt: new Date(), updatedAt: new Date()},
    {title: 'bad game!', content: 'Just a game to waste your time and nerves. ', userId:2 , gameId:1, createdAt: new Date(), updatedAt: new Date()},
    {title: 'Its Danny!', content: 'It\'s your boy Danny playing solo, ay! ', userId:3 , gameId:2, createdAt: new Date(), updatedAt: new Date()},
    {title: 'Wow', content: 'Where have I been? I was sad they had no plans for another Dark Souls, but this is pretty much another spiritual sequel that look pretty cool?', userId:4 , gameId:2, createdAt: new Date(), updatedAt: new Date()},
    {title: 'I love it!', content: 'One of the best things about Valheim is that it it doesn’t hold your hand, but doesn’t leave you floundering in the dark, either.', userId:5 , gameId:3, createdAt: new Date(), updatedAt: new Date()},
    {title: 'play this', content: 'Valheim surprised the hell out of me. ', userId:6 , gameId:3, createdAt: new Date(), updatedAt: new Date()},
    {title: 'What is this?', content: 'Runescape is a game in which you can do anything you want to be', userId:7 , gameId:4, createdAt: new Date(), updatedAt: new Date()},
    {title: 'Trash', content: 'This game is absolute trash.', userId:8 , gameId:4, createdAt: new Date(), updatedAt: new Date()},
    {title: 'Eh', content: 'Tactical action with potential -or one great game mode- but at the cost of the full game these are the two faces of the new Rainbow Six.', userId:9 , gameId:5, createdAt: new Date(), updatedAt: new Date()},
    {title: 'cool', content: 'good FPS at its gameplay core thanks to good level design', userId:10 , gameId:5, createdAt: new Date(), updatedAt: new Date()},
    {title: 'weak', content: 'The weak AI and the poor adherence from other players to Aliens: Fireteam Elite impede that the whole central idea from the game', userId:11 , gameId:6, createdAt: new Date(), updatedAt: new Date()},
    {title: 'zombies', content: 'Zombies enough said about where we are going with this franchise. You will get bored very quickly.', userId:12 , gameId:6, createdAt: new Date(), updatedAt: new Date()},
    {title: 'tired', content: 'I just can not relax while playing this game', userId:13 , gameId:7, createdAt: new Date(), updatedAt: new Date()},
    {title: 'glitchy', content: 'Glitches, false information about WW2, the worst maps in BF history, lack of support.', userId:14 , gameId:7, createdAt: new Date(), updatedAt: new Date()},
    {title: 'cash grab', content: 'This game was only made to extract as much cash out of you, whilst simultaneously making your life a living hell.', userId:15 , gameId:8, createdAt: new Date(), updatedAt: new Date()},
    {title: 'lolololol', content: 'I haven\'t been able to even find a single match, this mess is fully unplayable.', userId:16 , gameId:8, createdAt: new Date(), updatedAt: new Date()},
    {title: 'dont play', content: 'Just got done playing the console version of GO, and all I can say is that is TERRIBLE!', userId:17 , gameId:9, createdAt: new Date(), updatedAt: new Date()},
    {title: 'nervous', content: 'As an online game my apprehension is that if friends can\'t play together without hassle then soon they won\'t bother.', userId:18 , gameId:9, createdAt: new Date(), updatedAt: new Date()},
    {title: 'horrible', content: 'This game has horrible graphics. The developers used a comic book art style for the visuals', userId:19 , gameId:10, createdAt: new Date(), updatedAt: new Date()},
    {title: 'infantile', content: 'The game is boorish, infantile, and violent, and, in refusing to take any sort of consistent stand, is wildly off the mark.', userId:20 , gameId:10, createdAt: new Date(), updatedAt: new Date()},
    {title: 'all multiplayer', content: 'I hate the direction where games are going about making everything about the multiplayer and totally neglecting the campaign.', userId:1 , gameId:11, createdAt: new Date(), updatedAt: new Date()},
    {title: 'liars', content: 'Anyone who is reviewing the campaign as "fantastic" or "amazing" can\'t be a long time fan', userId:2 , gameId:11, createdAt: new Date(), updatedAt: new Date()},
    {title: '4 hour campaign?', content: '4 hour campaign, no split screen, completely forgettable story', userId:3 , gameId:12, createdAt: new Date(), updatedAt: new Date()},
    {title: 'lame', content: 'We live in a world where brilliant and beloved franchises like Rayman are reduced to mobile phone cash grabs', userId:4 , gameId:12, createdAt: new Date(), updatedAt: new Date()},
    {title: 'worst', content: 'This is one of the worst video games i have ever played ', userId:5 , gameId:13, createdAt: new Date(), updatedAt: new Date()},
    {title: 'sloppy', content: 'Unfortunately for this sloppy, cheap and noisy platformer, that\'s an unfathomably low bar to clear.', userId:6 , gameId:13, createdAt: new Date(), updatedAt: new Date()},
    {title: 'play something else', content: 'Go play Mario or something instead.', userId:7 , gameId:14, createdAt: new Date(), updatedAt: new Date()},
    {title: 'muy mal', content: 'Muy repetitivo y adictivo a la vez, malos gráficos, comunidad tóxica.', userId:8 , gameId:14, createdAt: new Date(), updatedAt: new Date()},
    {title: 'bullies online', content: 'supports child gambling and, bullying. filled with cringe and, unoriginal gameplay they stole directly off pubG', userId:9 , gameId:15, createdAt: new Date(), updatedAt: new Date()},
    {title: 'mal', content: 'El juego es infumable en la Switch. Las bajadas de FPS constantes, mucho popping, escalado horrible', userId:10 , gameId:15, createdAt: new Date(), updatedAt: new Date()},
    {title: 'super lame', content: 'There is so much hype over this game but really, I think that is pointless.', userId:11 , gameId:16, createdAt: new Date(), updatedAt: new Date()},
    {title: 'really bad game', content: 'really bad game should have died a long time ago. end it now you epic gamers', userId:12 , gameId:16, createdAt: new Date(), updatedAt: new Date()},
    {title: 'utter trash', content: 'the game is utter trash it used to be mediocre in the earlier seasons but at this point in time there is no fun in the game.', userId:13 , gameId:17, createdAt: new Date(), updatedAt: new Date()},
    {title: 'laggy', content: 'buggy, laggy and hard to control.', userId:14 , gameId:17, createdAt: new Date(), updatedAt: new Date()},
    {title: 'buggy', content: 'the game is trash', userId:15 , gameId:18, createdAt: new Date(), updatedAt: new Date()},
    {title: 'bad', content: 'This game is bad. The gameplay is okay and very repetitive.', userId:16 , gameId:18, createdAt: new Date(), updatedAt: new Date()},
    {title: 'no gamers', content: 'No gamer moments: I died once.', userId:17 , gameId:19, createdAt: new Date(), updatedAt: new Date()},
    {title: 'utter garbage', content: 'This game is uttur garbage. It\'s so boring. The gameplay is extremelty repetitive and bad.', userId:18 , gameId:19, createdAt: new Date(), updatedAt: new Date()},
    {title: 'ridiculous', content: ' implemented very poorly and has a ridiculous and horrible matchmaking', userId:19 , gameId:20, createdAt: new Date(), updatedAt: new Date()},
    {title: 'bad score', content: '1.4/10', userId:20 , gameId:20, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(options, null, { truncate: true, cascade: true, restartIdentity: true });  }
};
