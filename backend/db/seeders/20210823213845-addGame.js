'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = 'Games'


module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(options, [
     {title: 'League of Legends',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co254s.jpg',
     studio:'Riot Games',
     avgCleanRating: 4,
     description: 'League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes. With an ever-expanding roster of champions, frequent updates and a thriving tournament scene, League of Legends offers endless replayability for players of every skill level.',
     releaseDate:'Oct 27, 2009',
      createdAt: new Date(),
      updatedAt: new Date()},
     {title: 'Sekiro: Shadows Die Twice',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2a23.jpg',
     studio:'FromSoftware',
     avgCleanRating: 5,
     description: `"Carve your own clever path to vengeance in an all-new adventure from developer FromSoftware. Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation. Take Revenge. Restore your honor. Kill Ingeniously."`,
     releaseDate:'Mar 22, 2019',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Valheim',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2x61.jpg',
     studio:'Iron Gate AB',
     avgCleanRating: 5,
     description: `Valheim is a game about exploring a huge fantasy world inspired by Norse mythology and Viking culture. The world itself is procedurally generated and random seeds can be generated or set manually. You start your adventure at the relatively peaceful center of Valheim. The further from the center you travel, the more challenging the world becomes. But you will also find more valuable materials that you can use to craft deadlier weapons and sturdier armor. You will also build your own Viking fortress and outposts all over the world. Eventually, you will build mighty longships and sail the great oceans in search of exotic lands… but be wary of sailing too far.`,
     releaseDate:'Feb 02, 2021',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Oldschool Runescape',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1mo1.jpg',
     studio:'Jagex',
     avgCleanRating: 4,
     description: 'Relive the challenging levelling system and risk-it-all PvP of the biggest retro styled MMO. Play with millions of other players in this piece of online gaming heritage where the community controls the development so the game is truly what you want it to be!',
     releaseDate:'Feb 22, 2013',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Rainbow Six Siege',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2w0m.jpg',
     studio:'Ubisoft Montreal',
     avgCleanRating: 4,
     description: 'Inspired by the reality of counter terrorist operatives across the world, Rainbow Six Siege invites players to master the art of destruction. Intense close quarters confrontations, high lethality, tactics, team play, and explosive action are at the center of the experience. The multiplayer gameplay of Rainbow Six Siege sets a new bar for intense firefights and expert strategy in the rich legacy of past Rainbow Six games.',
     releaseDate:'Dec 01, 2015',
     createdAt: new Date(),
      updatedAt: new Date()},
      {title: 'Aliens: Fireteam Elite',
      url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3gu0.jpg',
      studio:'Cold Iron Studios',
      avgCleanRating: 4,
      description: `2202. A mysterious distress call reroutes your Marine Assault Unit to LV-895 in the outer colonies, where deadly Xenomorph legions, hidden corporate secrets, and ancient alien ruins await your arrival. Set in the iconic Alien universe, Aliens: Fireteam Elite is a cooperative 3rd-person survival shooter that drops your fireteam of hardened marines into a desparate fight to contain the evolving Xenomorph threat. Create and customize your own Colonial Marine, choosing from an extensive variety of classes, weapons, gear and perks, battling overwhelming odds in this heart-pounding survival shooting experience. Play a pivotal role in the epic events that occur 23 years after the original Alien trilogy as a Colonial Marine stationed aboard the USS Endeavor, battling terrifying Xenomorph threats. Face overwhelming odds against over 20 enemy types, including 11 different Xenomorphs along the evolutionary scale from Facehuggers to Praetorians, each designed with their own intelligence to ambush, outsmart and eviscerate vulnerable marines. Choose from five unique classes - Gunner, Demolisher, Technician, Doc and Recon - each with their own special abilities and character perks. Utilize an extensive arsenal of 30+ weapons and 70+ mods/attachments in your effort to eradicate the Alien threat.`,
      releaseDate:'Aug 24, 2021',
      createdAt: new Date(),
      updatedAt: new Date()},
      {title: 'Battlefield V',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1xbv.jpg',
     studio:'EA Digital Illusions CE',
     avgCleanRating: 4,
     description: 'The Battlefield series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in modes like the vast Grand Operations and the cooperative Combined Arms, or witness human drama set against global combat in the single player War Stories. As you fight in epic, unexpected locations across the globe, enjoy the richest and most immersive Battlefield yet. Now also includes Firestorm – Battle Royale, reimagined for Battlefield.',
     releaseDate:'Feb 22, 2013',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Apex Legends',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wzo.jpg',
     studio:'Respawn Entertainment',
     avgCleanRating: 4,
     description: 'Conquer with character in Apex Legends, a free-to-play battle royale game where legendary challengers fight for glory, fame, and fortune on the fringes of the Frontier. Explore a growing roster of diverse characters and experience intense tactical squad play in a bold, new evolution of battle royale.',
     releaseDate:'Feb 04 2019',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Counter-Strike: Global Offensive',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1vce.jpg',
     studio:'Valve Corporation',
     avgCleanRating: 4,
     description: `CS:GO is the fourth iteration of Valve's team-based modern-military first-person shooter that features new and updated versions of the classic CS content. While expanding the franchise, the game also introduces new gameplay modes, matchmaking and leader boards.`,
     releaseDate:'Aug 21, 2012',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'PUBG: BATTLEGROUNDS',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3j3h.jpg',
     studio:'PUBG Corp',
     avgCleanRating: 4,
     description: `PUBG: BATTLEGROUNDS is a battle royale shooter that pits 100 players against each other in a struggle for survival. Gather supplies and outwit your opponents to become the last person standing.`,
     releaseDate:'Dec 20, 2017',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Call of Duty: Warzone',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co20o8.jpg',
     studio:'Infinity Ward',
     avgCleanRating: 3.5,
     description: `Welcome to Warzone, the new massive free-to-play combat arena from the world of Modern Warfare®. Drop in, armor up, loot for rewards, and battle your way to the top.`,
     releaseDate:'Mar 10, 2020',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Persona 5 Royal',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1nic.jpg',
     studio:'Atlus',
     avgCleanRating: 4,
     description: `An enhanced version of Persona 5 with some new characters and a third semester added to the game. Released Internationally in 2020.`,
     releaseDate:'Oct 31, 2019',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Monster Hunter Rise',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2gnx.jpg',
     studio:'Capcom',
     avgCleanRating: 5,
     description: `Hunt solo or in a party with friends to earn rewards that you can use to craft a huge variety of weapons and armor. Brand new gameplay systems such as the high-flying ‘Wire Action’ and your canine companion ‘Palamute’ will add exciting new layers to the already robust combat that Monster Hunter is known for.`,
     releaseDate:'Mar 26, 2021',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Cyberpunk 2077',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2mjs.jpg',
     studio:'CD Projekt RED',
     avgCleanRating: 2,
     description: `Cyberpunk 2077 is a role-playing video game developed and published by CD Projekt. Adapted from the Cyberpunk franchise, the game is an open world, non-linear RPG with an FPS style in which players are able to heavily customize their character to suit their play style. Gun play, exploration, player choice and activities such as hacking are to feature heavily throughout the game with missions, quests and objectives being completed in a variety of different ways. The world will have dynamic weather and a day/night cycle to make it truly immersive.`,
     releaseDate:'Dec 09, 2020',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Super Smash Bros. Ultimate',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2255.jpg',
     studio:'Sora',
     avgCleanRating: 5,
     description: `Legendary game worlds and fighters collide in the ultimate showdown—a new entry in the Super Smash Bros. series for the Nintendo Switch system! New fighters, like Inkling from the Splatoon series and Ridley from the Metroid series, make their Super Smash Bros. series debut alongside every Super Smash Bros. fighter in the series…EVER! Faster combat, new items, new attacks, new defensive options, and more will keep the battle raging whether you’re at home or on the go.`,
     releaseDate:'Dec 07, 2018',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Hades',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.jpg',
     studio:'Supergiant Games',
     avgCleanRating: 5,
     description: `A rogue-lite hack and slash dungeon crawler in which Zagreus, son of Hades the Greek god of the dead, attempts to escape his home and his oppressive father by fighting the souls of the dead through the various layers of the ever-shifting underworld, while getting to know and forging relationships with its inhabitants.`,
     releaseDate:'Sep 17, 2020',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Final Fantasy VII Remake',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1qxr.jpg',
     studio:'Square Enix',
     avgCleanRating: 4,
     description: `A spectacular re-imagining of one of the most visionary games ever, FINAL FANTASY VII REMAKE rebuilds and expands the legendary RPG for today. The first game in this project is set in the eclectic city of Midgar and presents a fully standalone gaming experience.`,
     releaseDate:'Apr 10, 2020',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'Genshin Impact',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1ltz.jpg',
     studio:'miHoYo',
     avgCleanRating: 4,
     description: `Genshin Impact is an open-world action RPG. In the world of Teyvat—where beliefs in “The Seven” converge—epic adventures await, fearless travelers!`,
     releaseDate:'Sep 28, 2020',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'The Legend of Zelda: Breath of the Wild',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg',
     studio:'Nintendo',
     avgCleanRating: 4,
     description: `In this 3D open-world entry in the Zelda series, Link is awakened from a deep slumber without his past memories in the post-apocalyptic Kingdom of Hyrule, and sets off on a journey to defeat the ancient evil Calamity Ganon. Link treks, climbs and glides through fields, forests and mountain ranges while meeting and helping friendly folk and defeating enemies in order to gather up the strength to face Ganon.`,
     releaseDate:'Mar 03, 2017',
     createdAt: new Date(),
     updatedAt: new Date()},
     {title: 'VALORANT',
     url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2mvt.jpg',
     studio:'Riot Games',
     avgCleanRating: 4,
     description: `Imagine this: tactical shooter meets hypernatural powers. Everyone’s got guns and a unique set of abilities, so how do you beat someone with the speed of wind? Use your own moves to outplay them and beat them to the shot. VALORANT is a game for bold strategists who dare to make the unexpected play, because if it wins, it works.`,
     releaseDate:'Jun 02, 2020',
     createdAt: new Date(),
     updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(options, null, { truncate: true, cascade: true, restartIdentity: true });  }
};
