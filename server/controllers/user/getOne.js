const getUser = (req, res) => {

    console.log(req.session.secretMessage);
    return res.status(200).send({ data: req.session.secretMessage });

}

module.exports = getUser;