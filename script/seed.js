"use strict";

const {
  db,
  models: { User, Investor, Filmmaker },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  // Creating Investors
  const investors = await Promise.all([
    Investor.create({
      name: "Investor A",
      riskTolerance: "low",
      investmentAmount: 5000,
      investmentLength: 24,
      userId: users[0].id,
    }),
    Investor.create({
      name: "Investor B",
      riskTolerance: "high",
      investmentAmount: 10000,
      investmentLength: 12,
      userId: users[0].id,
    }),
    Investor.create({
      name: "Investor C",
      riskTolerance: "medium",
      investmentAmount: 8000,
      investmentLength: 18,
      userId: users[1].id,
    }),
  ]);

  // Creating Filmmakers
  const filmmakers = await Promise.all([
    Filmmaker.create({
      name: "Filmmaker A",
      email: "filmmakerA@gmail.com",
      imageUrl: "https://imageurl.com",
      yearsOfExperience: 5,
      userId: users[0].id,
    }),
    Filmmaker.create({
      name: "Filmmaker B",
      email: "filmmakerB@gmail.com",
      imageUrl: "https://imageurl.com",
      yearsOfExperience: 3,
      userId: users[1].id,
    }),
  ]);

  console.log(
    `seeded ${users.length} users, ${investors.length} investors, and ${filmmakers.length} filmmakers`
  );
  console.log("seeded successfully");
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    investors: {
      a: investors[0],
      b: investors[1],
      c: investors[2],
    },
    filmmakers: {
      a: filmmakers[0],
      b: filmmakers[1],
    },
  };
}

/*
We've separated the seed function from the runSeed function.
This way we can isolate the error handling and exit trapping.
The seed function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
Execute the seed function, IF we ran this module directly (node seed).
Async functions always return a promise, so we can use catch to handle
any errors that might occur inside of seed.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see ./seed.spec.js)
module.exports = seed;
