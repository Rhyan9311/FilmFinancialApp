const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
// const {
//   investmentMatchmaking,
// } = require("../controllers/matchmakingController");
const { getMatchingInvestments } = require("../matchmaking");
const { Investor } = require("../db");

// // Potential Investors Route
// router.get("/investor", async (req, res) => {
//   const { genre, budget, successRate } = req.query;

//   try {
//     const results = await investmentMatchmaking(genre, budget, successRate);
//     res.json(results);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// Matching Investments Route
router.get("/investmentPreferences", async (req, res) => {
  const { userId } = req.query;
  try {
    const matches = await getMatchingInvestments(userId);
    res.json(matches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Create InvPrefForm Route
router.post("/investmentPreferences", async (req, res) => {
  try {
    const { userId, investmentPreferences } = req.body;
    const invPrefForm = await Investor.update(
      { investmentPreferences },
      { where: { userId } }
    );
    res.json(invPrefForm);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get InvPrefForm for User Route
router.get("/investmentPreferences/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const invPrefForm = await Investor.findOne({
      where: { userId },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (!invPrefForm) {
      return res
        .status(404)
        .json({ message: `No InvPrefForm found for user with id ${userId}` });
    }
    res.json(invPrefForm);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// serve up all investors
router.get("/investors", async (req, res, next) => {
  try {
    const investors = await Investor.findAll();
    res.json(investors);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const investors = await Investor.findAll();
    res.json(investors);
  } catch (err) {
    next(err);
  }
});

// serve up a single investor by id
router.get("/:id", async (req, res, next) => {
  try {
    const investor = await Investor.findByPk(req.params.id);
    if (!investor) {
      const error = new Error(`Investor with id ${req.params.id} not found`);
      error.status = 404;
      throw error;
    }
    res.json(investor);
  } catch (err) {
    next(err);
  }
});

// remove a user from an investor's list by id
router.delete("/:userId", async (req, res, next) => {
  try {
    const investor = await Investor.findByPk(req.params.investorId);
    if (!investor) {
      const error = new Error(
        `Investor with id ${req.params.investorId} not found`
      );
      error.status = 404;
      throw error;
    }
    await investor.removeUser(req.params.userId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// update an existing investor
router.put("/:id", async (req, res, next) => {
  try {
    const [numUpdated, [updatedInvestor]] = await Investor.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (numUpdated === 0) {
      const error = new Error(`Investor with id ${req.params.id} not found`);
      error.status = 404;
      throw error;
    }
    res.json(updatedInvestor);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
