"use strict";

// IMPORT MODULES
const express = require("express");
const path = require('path');
const app = express();
// ------------------------

const PORT = process.env.PORT || 9000; // SET PORT CONFIG


// GIVE CORS ACCESS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PATCH, POST, GET, DELETE');
    next();
});

// Serve static files from the React app
// app.use(express.static(path.join(path.resolve(__dirname, '..'), 'client/build')));

// ! ALOW TO READ JSON - READ UP ON WHAT AND WHY
app.use(express.urlencoded({ extended: true })); // ??
app.use(express.json()); // ??


// REQUIRE ROUTES
// USER
const user = require("./routes/user/user");
app.use("/api/user", user);
// ! LOGIN
// ! LOGOUT


// ROOT INDEX
// app.get('*', (req, res) => {
//     res.sendFile(path.join(path.resolve(__dirname, '..'), '/client/build/index.html'));
// });

// LISTEN
app.listen(PORT, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${PORT}`)
})