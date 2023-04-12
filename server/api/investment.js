const express = require("express");
const router = express.Router();
const Investment = require("../db/models/Investment");
const InvPrefForm = require("../"); // Import InvPrefForm model
const { Op } = require("sequelize");
const {
  investmentMatchmaking,
} = require("../controllers/matchmakingController");
const { getMatchingInvestments } = require("../matchmaking");

// Potential Investors Route
router.get("/potential-investors", async (req, res) => {
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
router.get("/matching-investments", async (req, res) => {
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
router.post("/inv-pref-form", async (req, res) => {
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
router.get("/inv-pref-form/:userId", async (req, res) => {
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

module.exports = router;
