// const express = require('express');
// const sequelize = require('../config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express(); 

// app.use(express.json());
// //Not sure if this is necessary or correct
// app.use(express.urlencoded({ extended: false}));

// //imports quote model
// const { Quote } = require('../models/quotes.js');

// sequelize.sync().then(() => {
//     app.listen(PORT, () => console.log(''));
// });

// app.get('/seed', async (req,res) => {
//     await Quote.bulkCreate([
//      {
//         quote: "It's your workout, your body, your journey. OWN IT!",
//     },
//     {
//         quote: "When you feel like quitting, think about why you started.",
//     },
//     {
//         quote: "Mindset separates the best from the rest.",
//     },
//     {
//         quote: "Love yourself by loving your body",
//     },
//     {
//         quote: "Hard work + dedication = SUCCESS!",
//     },
//     {
//         quote: "All things are difficult before they are easy.",
//     },
//     {
//         quote: "It is about the journey not the destination.",
//     },
//     {
//         quote: "If you are going to quit anything, quit making excuses.",
//     },
//     {
//         quote: "Soreness is weakness leaving your body!",
//     },
//     {
//         quote: "Best views always come after the hardest climbs.",
//     },
//     ]);
// });