"use strict";

// IMPORT MODULES
const express = require('express');
const app = express(); // express app
const path = require('path');
const session = require("express-session");

const PORT = process.env.PORT || 9000; // SET PORT CONFIG


// ! ALOW TO READ JSON - READ UP ON WHAT AND WHY
app.use(express.urlencoded({ extended: true })); // ??
app.use(express.json()); // ??

// TODO: MOVE THIS SESSION TO API/AUTH
// INITIALIZE SESSION
app.use("/api/auth", session({
    name: "userID",
    secret: "randomSecreMessage",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false },

}));

// Serve static files from the React app
app.use(express.static(path.join(path.resolve(__dirname, '..'), 'client/build')));

// REQUIRE ROUTES
// AUTH
const auth = require("./routes/auth/auth");
app.use("/api/auth", auth);
// USER
const user = require("./routes/user/user");
app.use("/api/user", user);


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