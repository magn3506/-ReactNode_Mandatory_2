"use strict";

// IMPORT MODULES
require('dotenv').config()
const express = require('express');
const app = express(); // express app
const path = require('path');
const session = require("express-session");

const PORT = process.env.PORT || 9000; // SET PORT CONFIG

// ALLOW JSON BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// TODO: MOVE THIS SESSION TO API/AUTH
// ! INITIALIZE SESSION - ONLY ON ALL* POST REQUEST MADE FOR /api/auth
app.post("/api/auth/*", session({
    name: "userID",
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: (process.env.DEV_OR_PROD === "PRODUCTION") ? true : false,
        httpOnly: false
    }, // ! SET secure true on prod for https
}));

// Serve static files from the client React build folder
app.use(express.static(path.join(path.resolve(__dirname, '..'), 'client/build')));

// REQUIRE ROUTES
// auth
const auth = require("./routes/auth/auth");
app.use("/api/auth", auth);
// user
const user = require("./routes/user/user");
app.use("/api/user", user);


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