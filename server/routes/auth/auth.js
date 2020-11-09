"use strict";

const express = require("express");
let router = express.Router();

// CONTROLLERS
const login = require("../../controllers/auth/login");
// const logout = require("../../controllers/auth/logout");


// Routes
router
    .post("/login", login) // Login

module.exports = router;