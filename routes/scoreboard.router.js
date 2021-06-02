const express = require("express");
const router = express.Router();
const { getUserbyId } = require("../Middlewares/UserInfo");
const {
  AddScore,
  ShowAllScore,
  UserScores,
} = require("../Middlewares/ScoreBoard");

router.route("/AddScore").post(AddScore);

router.route("/ShowAllScore").get(ShowAllScore);

router.route("/UserScores").get(getUserbyId, UserScores);

module.exports = router;
