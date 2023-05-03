const express = require("express");

const { register, login, logout } = require("../controllers/auth");

const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
router1.post("/register", register);
router2.post("/login", login);
router3.delete("/logout", logout);

module.exports = { router1, router2, router3 };
