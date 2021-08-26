npx dotenv sequelize db:create

npx sequelize model:generate --name User --attributes username:string,firstName:string,lastName:string,email:string,hashedPassword:string

npx sequelize model:generate --name Game --attributes title:string,studio:string,avgCleanRating:integer,description:string,releaseDate:string

npx sequelize model:generate --name ReviewLike --attributes like:boolean,reviewId:integer,userId:integer

npx sequelize model:generate --name Shelf --attributes name:string,userId:integer

npx sequelize model:generate --name GameCleanRating --attributes userId:integer,rating:integer,gameId:integer

npx sequelize model:generate --name SlapOn --attributes shelfId:integer,gameId:integer

npx sequelize model:generate --name Review --attributes title:string,content:string,userId:integer,gameId:integer

npx sequelize model:generate --name GameJoin --attributes userId:integer,gameId:integer

npx sequelize seed:generate --name addGame

npx sequelize seed:generate --name addReview

npx sequelize seed:generate --name addSlap

npx sequelize seed:generate --name addShelf

npx sequelize seed:generate --name addReviewLike

npx sequelize seed:generate --name addGameCleanRating

npx sequelize seed:generate --name addUser

npx sequelize seed:generate --name addGameJoin

npx dotenv sequelize db:migrate

npx dotenv sequelize db:seed:all

npx dotenv sequelize db:seed:undo:all

npx dotenv sequelize db:migrate:undo:all

(you can also use):
npx dotenv sequelize db:drop

git push --set-upstream origin pro

//added line
