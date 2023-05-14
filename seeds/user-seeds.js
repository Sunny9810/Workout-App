const { User } = require('../models');

const userdata = [
    {
        name: "Oscar",
        email: "oscar@gmail.com",
        password: "password12345"
      },
      {
        name: "Arevik",
        email: "Arevik@gmail.com",
        password: "password12346"
      },
      {
        name: "Michael",
        email: "Michael@gmail.com",
        password: "password12347"
      },
];

const seedusers = () =>User.bulkCreate(userdata);

module.exports = seedusers;