"use strict";

const express = require("express");
require('dotenv').config();
let router = express.Router();


// CONTROLLERS
const login = require("../../controllers/auth/login");
const logout = require("../../controllers/auth/logout");
const resetUserPassword = require("../../controllers/auth/resetUserPassword");


// Routes
router
    .post("/login", login) // Login
    .post("/logout", logout) // Login
    .get("/resetUserPassword/:resetPasswordToken/:email", resetUserPassword);

module.exports = router;