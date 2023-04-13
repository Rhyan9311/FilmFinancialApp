// Import required libraries and models
const DecisionTree = require("decision-tree");
const CollaborativeFiltering = require("collaborative-filtering");
const NeuralNetwork = require("neural-network");
const Investment = require("./db/models/Investor");
const User = require("./db/models/User");

// Define a function to get matching investments for a given user
async function getMatchingInvestments(userId) {
  // Get the user's genre and budget preferences from the database
  const user = await User.findByPk(userId);
  const genre = user.genrePreference;
  const budget = user.budgetPreference;

  // Get all investments from the database
  const investments = await Investment.findAll();

  // Extract features from the investments
  const features = investments.map((investment) => {
    return {
      genre: investment.genre,
      budget: investment.budget,
      success: investment.success,
      investorId: investment.investorId,
    };
  });

  // Train the decision tree model on the investment features
  const dtree = new DecisionTree(features, "success", [
    "genre",
    "budget",
    "investorId",
  ]);
  dtree.train();

  // Train the collaborative filtering model on the investment features
  const cf = new CollaborativeFiltering(features, "success", ["investorId"]);
  cf.train();

  // Train the neural network model on the investment features
  const nn = new NeuralNetwork(features, "success", [
    "genre",
    "budget",
    "investorId",
  ]);
  nn.train();

  // Use the trained models to predict the success of each investment
  const matches = investments.map((investment) => {
    const prediction = {
      id: investment.id,
      genre: investment.genre,
      budget: investment.budget,
      investorId: investment.investorId,
      decisionTree: dtree.predict(investment),
      collaborativeFiltering: cf.predict(investment),
      neuralNetwork: nn.predict(investment),
    };
    return prediction;
  });

  // Return the matching investments, sorted by their overall predicted success
  return matches.sort((a, b) => {
    const aSuccess =
      a.decisionTree + a.collaborativeFiltering + a.neuralNetwork;
    const bSuccess =
      b.decisionTree + b.collaborativeFiltering + b.neuralNetwork;
    return bSuccess - aSuccess;
  });
}

module.exports = {
  getMatchingInvestments,
};
