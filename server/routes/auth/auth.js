"use strict";

const express = require("express");
require('dotenv').config();
let router = express.Router();
const session = require("express-session");


// CONTROLLERS
const login = require("../../controllers/auth/login");
const logout = require("../../controllers/auth/logout");
const resetUserPassword = require("../../controllers/auth/resetUserPassword");


// Routes
router
    .post("/login", login) // Login
    .post("/logout", logout) // Login
    .get("/resetUserPassword/:resetPasswordToken/:email", session({
        name: "resetPasswordID",
        resave: false,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET,
        cookie: {
            secure: (process.env.DEV_OR_PROD === "PRODUCTION") ? true : false,
            httpOnly: false
        }
    }), resetUserPassword);

module.exports = router;