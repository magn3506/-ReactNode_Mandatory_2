require('dotenv').config();
const nodemailer = require("nodemailer");
const client = require('../../db/connection');


const resetUserPasswordNodemailer = (req, res) => {

    const body = req.body;
    const reqEmail = body.email;
    console.log(body);

    // TJEK IF EMAIL IS IN DB

    client.connect(err => {
        if (err) throw err;

        const resetToken = "ThisIsAResetToken";

        const db = client.db("KiwiQuiz");
        const collection = db.collection("Users");
        const query = { email: reqEmail };
        const newvalues = {
            $set: {
                resetToken: resetToken
            },
        };

        // TJEK USER IN DB
        collection.updateOne(query, newvalues, function (err, result) {
            if (err) throw err;

            // ! IF USER NOT IN DB KILL SCRIPT
            if (result.matchedCount !== 1) {
                console.log("eror");
                res.status(400).send("ERROR");
                return;
            }

            const transporter = nodemailer.createTransport({
                service: "hotmail",
                auth: {
                    user: process.env.OUTLOOK_USER,
                    pass: process.env.OUTLOOK_PASSWORD
                }
            });

            // CHANGE URL PATH DEPENDING ON PROD OR DEVELOPMENT
            const dev_resetUserPassword_API_URL = `http://localhost:9000/api/auth/resetUserPassword/${resetToken}/${reqEmail}`; // TODO: IN PROD - ADD ENDPOINT     // IN DEVLOPMENT
            const prod_resetUserPassword_API_URL = req.protocol + '://' + req.get('host') + `/api/auth/resetUserPassword/${resetToken}/${reqEmail}`; // TODO: add endpint to reset API     // IN PRODUCTION


            const resetUserPassword_API_URL = (process.env.DEV_OR_PROD === 'PRODUCTION') ? prod_resetUserPassword_API_URL : dev_resetUserPassword_API_URL;

            const HTML = `
                <h1>HI ${reqEmail}</h1>
                <p>You have requested to reset you password. Please follow the link below</p>
                <a href=${prod_resetUserPassword_API_URL}>${prod_resetUserPassword_API_URL}</a>
                `;


            const options = {
                from: process.env.OUTLOOK_USER,
                to: reqEmail,
                subject: "Sending email width node.js",
                text: "Hello from KiwiQuiz !",
                html: HTML
            };

            transporter.sendMail(options, (err, info) => {
                if (err) {
                    console.log(err);
                    res.status(400).send({
                        msg: "error has accured",
                        error: err
                    })
                    return;
                }
                console.log("sent: " + info.response);
                res.status(200).send("An email has been send to");
            })


        });
    });










}

module.exports = resetUserPasswordNodemailer;