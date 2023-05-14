const { Quotes } = require('../models');

const quotesdata = [
    {
        quotes: "It's your workout, your body, your journey. OWN IT!",
    },
    {
        quotes: "When you feel like quitting, think about why you started.",
    },
    {
        quotes: "Mindset separates the best from the rest.",
    },
    {
        quotes: "Love yourself by loving your body",
    },
    {
        quotes: "Hard work + dedication = SUCCESS!",
    },
    {
        quotes: "All things are difficult before they are easy.",
    },
    {
        quotes: "It is about the journey not the destination.",
    },
    {
        quotes: "If you are going to quit anything, quit making excuses.",
    },
    {
        quotes: "Soreness is weakness leaving your body!",
    },
    {
        quotes: "Best views always come after the hardest climbs.",
    },
];

const seedquotes = () =>Quotes.bulkCreate(quotesdata);

module.exports = seedquotes;