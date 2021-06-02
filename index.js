// const IplQuizData = require("./JSON/ipl-quiz.json");
// const MarvelQuizData = require("./JSON/marvel-quiz.json");
// const ReactQuizData = require("./JSON/react-quiz.json");
const express = require("express");
const { initialzeDBConnection } = require("./db/db");
const quizRoute = require('./routes/quiz.router')
const userRoute = require('./routes/user.router')
const scoreRoute = require('./routes/scoreboard.router')
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json())
initialzeDBConnection();
// async function SaveData() {
//   ReactQuizData.map(async (quiz) => {
//     try {
//       const NewQuiz = ReactQuiz(quiz);
//       const savedQuiz = await NewQuiz.save();
//       console.log("Saved");
//     } catch (err) {
//       console.error(err);
//     }
//   });
// }

// SaveData();
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use('/quiz',quizRoute)
app.use('/user',userRoute)
app.use('/score',scoreRoute)

app.get("/*", (req, res) => {
  res.status(404).json({ errorMessage: "it's not here!" });
});
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
