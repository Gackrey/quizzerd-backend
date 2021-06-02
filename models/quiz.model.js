const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuizSchema = new Schema({
  id: Schema.Types.ObjectId,
  question: String,
  options: Array,
  answer: Number,
});

const IplQuiz = mongoose.model("Ipl", QuizSchema);
const MarvelQuiz = mongoose.model("Marvel", QuizSchema);
const ReactQuiz = mongoose.model("React", QuizSchema);

module.exports = { IplQuiz, MarvelQuiz, ReactQuiz };
