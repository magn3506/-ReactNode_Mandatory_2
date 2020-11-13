const client = require('../../db/connection');
const bcrypt = require('bcrypt');


const resetUserPassword = (req, res) => {


    // CLEAR COOKIE
    res.clearCookie('resetPasswordID');

    const body = req.body;
    const resetToken = body.resetToken;
    const newPassword = body.newPassword;

    // TJEK IF BODY IS EMPTY ---------------------------
    const isEmpty = Object.keys(body).length === 0 && body.constructor === Object;

    // EXIT SCRIPT IF BODY IS EMPTY
    if (isEmpty) {
        return res.status(400).send({
            msg: "ERROR",
        });
    }

    // --------------------------------------------------

    client.connect(err => {
        if (err) throw err;
        const db = client.db("KiwiQuiz");
        const collection = db.collection("Users");
        const query = { resetToken: resetToken };


        // ENCRYPT PASSWORD
        const saltRounds = 10;
        bcrypt.hash(newPassword, saltRounds, function (err, hash) {

            if (err) {
                throw err;
            }

            const newvalues = {
                $set: {
                    isResetPassAuth: 0,
                    resetToken: null,
                    password: hash
                },
            };

            // TJEK USER IN DB
            collection.updateOne(query, newvalues, function (err, result) {
                if (err) throw err;

                // TJEK DB IF MATCH
                if (result.matchedCount !== 1) {
                    console.log("eror");
                    res.status(400).send("ERROR");
                    return;
                };

                res.status(200).send("succes");

            });
        });
    });
}

module.exports = resetUserPassword;

