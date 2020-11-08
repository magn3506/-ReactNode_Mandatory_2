"use strict";

const express = require("express");
let router = express.Router();

// CONTROLLERS
const getUsers = require("../../controllers/user/getAll");
const getUser = require("../../controllers/user/getOne");
const createUser = require("../../controllers/user/create");
const updateUser = require("../../controllers/user/update");
const deleteUser = require("../../controllers/user/delete");

// Routes
router
    .get("/", getUsers) // GET ALL USERS
    .get("/:id", getUser) // GET USER BY ID
    .post("/", createUser) // CREATE USER
    .patch("/:id", updateUser) // UPDATE USER BY ID
    .delete("/:id", deleteUser) // DELETE USER BY ID

module.exports = router;