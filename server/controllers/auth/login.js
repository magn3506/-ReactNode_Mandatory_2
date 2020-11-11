const client = require('../../db/connection');
const bcrypt = require('bcrypt');



const login = (req, res) => {

    const body = req.body;

    // TJEK IF BODY IS EMPTY
    const isEmpty = Object.keys(body).length === 0 && body.constructor === Object;

    // EXIT SCRIPT IF BODY IS EMPTY
    if (isEmpty) {

        return res.status(400).send({
            msg: "Body is empty",
        });
    }

    const regEmail = body.email; // Email comming from client request
    const reqPassword = body.password; // Password comming from client request

    client.connect(err => {
        if (err) throw err;

        const db = client.db("KiwiQuiz");
        const collection = db.collection("Users");

        // QUERY
        const query = { email: regEmail }; // return user if regData matches dbData
        const projection = { projection: { _id: 1, email: 1, password: 1 } } // RETURN ONLY email & password

        // Tjek if user log in credentials mathes the a user in DB
        collection.findOne(query, projection, (err, user) => {

            if (err) {
                //handle error here if any
                res.status(400).send({ err, msg: "ERROR HAS ACCURED" });
                return;
            }

            //if a user was found 
            if (user) {


                // CHECK IF ENCRYPTET PASSWORD MATCHES DB PASSWORD
                bcrypt.compare(reqPassword, user.password, function (err, result) {

                    if (result === false) {
                        res.status(400).send({ msg: "ERROR: WRONG PASSWORD" });
                        return;
                    }

                    res.status(200).send(user);
                    req.session.userID = user._id;
                    return;

                });



            } else {
                // USER DOESENT EXIST. REDIRECT TO LOGIN PAGE
                res.status(401).send("No Match");
                return;

            }

        });
        return;
    });


}

module.exports = login;