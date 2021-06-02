const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuizSchema = new Schema({
  id: Schema.Types.ObjectId,
  username: String,
  genre: String,
  score: Number,
});

const Scoreboard = mongoose.model("Scoreboard", QuizSchema);

module.exports = { Scoreboard };
