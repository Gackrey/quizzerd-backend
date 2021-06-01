const { Scoreboard } = require("../models/scoreboard.model");

const AddScore = async (req, res) => {
  const score = req.body;
  const NewScore = Scoreboard(score);
  await NewScore.save();
  res.json({ success: true });
};

const ShowAllScore = async (req, res) => {
  const allscores = await Scoreboard.find();
  res.json(allscores);
};

const UserScores = async (req, res) => {
  const { user } = req;
  const userScores = await Scoreboard.find({ username: user.username });
  res.json(userScores);
};

module.exports = { AddScore, ShowAllScore, UserScores };
