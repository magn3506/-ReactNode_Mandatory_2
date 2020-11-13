"use strict";

// IMPORT MODULES
require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express(); // express app
const path = require('path');
const session = require("express-session");
const rateLimit = require("express-rate-limit");

const PORT = process.env.PORT || 9000; // SET PORT CONFIG

// ALLOW JSON BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// RATE LIMITER
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);
const apiLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100
});


// only apply to requests that begin with /api/
app.use("/api/", apiLimiter);
//-------------------------------------------------


// Serve static files from the client React build folder
app.use(express.static(path.join(path.resolve(__dirname, '..'), 'client/build')));

// REQUIRE ROUTES
// auth
const auth = require("./routes/auth/auth");
app.use("/api/auth", auth);
// user
const user = require("./routes/user/user");
app.use("/api/user", user);

// mailer
const mailer = require("./routes/mailer/mailer");
app.use("/api/mailer", mailer);

// SEND ALL REQUEST WICH DOESNOT MATCH TO CLIENT REACT BIILD INDEX FILE
// 404-page is handled in react-frontend-clientside
app.get('*', (req, res) => {

    res.sendFile(path.join(path.resolve(__dirname, '..'), '/client/build/index.html'));
});


// LISTEN
app.listen(PORT, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${PORT}`)
})