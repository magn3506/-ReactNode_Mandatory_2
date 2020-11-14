"use strict";

const express = require("express");
let router = express.Router();

// CONTROLLERS
// const getUsers = require("../../controllers/user/getAll");
const getUser = require("../../controllers/user/getOne");
const createUser = require("../../controllers/user/create");
const updateUser = require("../../controllers/user/update");
const deleteUser = require("../../controllers/user/delete");
const resetUserPassword = require("../../controllers/user/resetUserPassword");

// Routes
router
    .get("/", getUser) // GET USER BY ID
    .post("/", createUser) // CREATE USER
    .patch("/update/:id", updateUser) // UPDATE USER BY ID
    .delete("/:id", deleteUser) // DELETE USER BY ID
    .patch("/resetUserPassword", resetUserPassword) // RESET USER PASSWORD

module.exports = router;