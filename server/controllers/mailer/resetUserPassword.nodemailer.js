require('dotenv').config();
const nodemailer = require("nodemailer");


const resetUserPasswordNodemailer = (req, res) => {

    const body = req.body;
    const reqEmail = body.email;


    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.OUTLOOK_USER,
            pass: process.env.OUTLOOK_PASSWORD
        }
    });

    const HTML = `
        <h1>HI ${reqEmail}</h1>
        <p>You have requested to reset you password. Please follow the link below</p>
        <a href="google.dk">Reset My Password</a>
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




}

module.exports = resetUserPasswordNodemailer;