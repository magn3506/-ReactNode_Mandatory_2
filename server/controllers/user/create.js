const client = require('../../db/connection');
const bcrypt = require('bcrypt');



const createUser = (req, res) => {

    const body = req.body;

    const reqEmail = body.email; // Email comming from client request
    const reqPassword = body.password; // Password comming from client request

    // TJEK IF BODY IS EMPTY ---------------------------
    const isEmpty = Object.keys(body).length === 0 && body.constructor === Object;

    // EXIT SCRIPT IF BODY IS EMPTY
    if (isEmpty) {

        return res.status(400).send({
            msg: "Body is empty",
        });
    }

    // EXIT IF BOTH EMAIL AND PASSWORD IS NOT PROVIDED
    if (!reqEmail || !reqPassword) {

        return res.status(400).send({
            msg: "Missing Password or email",
        });
    }

    // --------------------------------------------------

    client.connect(err => {
        if (err) throw err;
        const db = client.db("KiwiQuiz");
        const collection = db.collection("Users");


        // ENCRYPT PASSWORD
        const saltRounds = 10;
        bcrypt.hash(reqPassword, saltRounds, function (err, hash) {

            if (err) {
                throw err;
                return;
            }

            // CREATE NEW USER OBJ
            const newUserObj = {
                email: reqEmail,
                password: hash
            }

            // ADD TO DB
            collection.insertOne(newUserObj, function (err) {
                if (err) throw err;
                res.status(200).send("User was created");
                return;
            })

        });





    });
}

module.exports = createUser;

