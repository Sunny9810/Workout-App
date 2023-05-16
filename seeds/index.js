
// const seedGallery = require('./galleryData');
// const seedPaintings = require('./paintingData');
const muscleGroup=require('./mgroup-seeds');
const exercises=require('./exercises-seeds');
const quotes=require('./quotes-seeds');
const users=require('./user-seeds');

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await muscleGroup();
  console.log('\n----- muslceGroup SEEDED -----\n');

  await exercises();
  console.log('\n----- exercises SEEDED -----\n') 

  await quotes();
  console.log('\n----- quotes SEEDED -----\n')

  await users();
  console.log('\n----- users SEEDED -----\n')
  
  process.exit(0);
};

seedAll();
