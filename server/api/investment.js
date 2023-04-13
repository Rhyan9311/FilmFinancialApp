const express = require("express");
const router = express.Router();
const Investment = require("../db/models/Investor");
const InvPrefForm = require("../db/models/InvPrefForm");
const { Op } = require("sequelize");
const {
  investmentMatchmaking,
} = require("../controllers/matchmakingController");
const { getMatchingInvestments } = require("../matchmaking");

// Potential Investors Route
router.get("/", async (req, res) => {
  const { genre, budget, successRate } = req.query;

  try {
    const results = await investmentMatchmaking(genre, budget, successRate);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

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
    const invPrefForm = await InvPrefForm.create({
      userId,
      investmentPreferences,
    });
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
    const invPrefForm = await InvPrefForm.findOne({
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

// serve up a single investor by id
router.get("/investments/:id", async (req, res, next) => {
  try {
    const investment = await Investment.findByPk(req.params.id);
    if (!investment) {
      const error = new Error(`Investment with id ${req.params.id} not found`);
      error.status = 404;
      throw error;
    }
    res.json(investment);
  } catch (err) {
    next(err);
  }
});

// serve up all investors
router.get("/investments", async (req, res, next) => {
  try {
    const investments = await Investment.findAll();
    res.json(investments);
  } catch (err) {
    next(err);
  }
});

// remove a user from an investor's list by id
router.delete(
  "/investments/:investmentId/users/:userId",
  async (req, res, next) => {
    try {
      const investment = await Investment.findByPk(req.params.investmentId);
      if (!investment) {
        const error = new Error(
          `Investment with id ${req.params.investmentId} not found`
        );
        error.status = 404;
        throw error;
      }
      await investment.removeUser(req.params.userId);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
);

// update an existing investor
router.put("/investments/:id", async (req, res, next) => {
  try {
    const [numUpdated, [updatedInvestment]] = await Investment.update(
      req.body,
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    if (numUpdated === 0) {
      const error = new Error(`Investment with id ${req.params.id} not found`);
      error.status = 404;
      throw error;
    }
    res.json(updatedInvestment);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
