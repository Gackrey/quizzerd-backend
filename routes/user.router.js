const express = require("express");
const router = express.Router();
const { getUserDetails, getUserbyId } = require("../Middlewares/UserInfo");
const { login } = require("../Middlewares/login");
const { signup } = require("../Middlewares/signup");

router.route("/signup").post(signup);

router.route("/login").post(login);

router.route("/userDetails").get(getUserbyId, getUserDetails);

module.exports = router;