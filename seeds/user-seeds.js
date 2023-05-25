const bcrypt = require("bcrypt");
const { User } = require("../models");

const userdata = [
  {
    name: "Oscar",
    email: "oscar@gmail.com",
    password: "password12345",
  },
  {
    name: "Arevik",
    email: "arevik@gmail.com",
    password: "password12346",
  },
  {
    name: "Michael",
    email: "michael@gmail.com",
    password: "password12347",
  },
];

const seedUsers = async () => {
  try {
    const hashedUserdata = await Promise.all(
      userdata.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        return user;
      })
    );

    await User.bulkCreate(hashedUserdata);
    console.log("Users seeded successfully");
  } catch (err) {
    console.error(err);
  }
};

module.exports = seedUsers;
