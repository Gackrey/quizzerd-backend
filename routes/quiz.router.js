const express = require("express");
const router = express.Router();
const { IplQuiz, MarvelQuiz, ReactQuiz } = require('../models/quiz.model');
router.route("/ipl").get(async (req, res) => {
  const jsondata = await IplQuiz.find();
  res.json({ questionlist: jsondata });
});

router.route("/marvel").get(async (req, res) => {
  const jsondata = await MarvelQuiz.find();
  res.json({ questionlist: jsondata });
});

router.route("/react").get(async (req, res) => {
  const jsondata = await ReactQuiz.find();
  res.json({ questionlist: jsondata });
});

module.exports = router;