require('dotenv').config();
const client = require('../../db/connection');




const resetUserPassword = (req, res) => {

    const reqPasswordToken = req.params.resetPasswordToken;
    const reqEmail = req.params.email;

    // SET SESSION FOR FRONT END AUTH
    req.session.resetPasswordID = reqPasswordToken;

    client.connect(err => {
        if (err) throw err;

        const db = client.db("KiwiQuiz");
        const collection = db.collection("Users");
        const query = { email: reqEmail, resetToken: reqPasswordToken };
        const newvalues = {
            $set: {
                isResetPassAuth: 1
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

            // REDIRECT USER
            const dev_redirectURL = `http://localhost:3000/resetPassword/${reqPasswordToken}`;
            const prod_redirectURL = `/resetPassword/${reqPasswordToken}`;
            const redirectURL = (process.env.DEV_OR_PROD === "PRODUCTION") ? prod_redirectURL : dev_redirectURL;
            res.redirect(redirectURL);
        });

    });


}

module.exports = resetUserPassword;