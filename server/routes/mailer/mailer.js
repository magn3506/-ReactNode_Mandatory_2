"use strict";

const express = require("express");
let router = express.Router();

// CONTROLLERS
const resetUserPassword = require("../../controllers/mailer/resetUserPassword.nodemailer");


// Routes
router
    .post("/resetUserPassword", resetUserPassword)

module.exports = router;