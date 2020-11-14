const logout = (req, res) => {
    res.clearCookie('isUserAuth_kiwiQuiz');
    req.session.secretMessage = undefined; // SET SESSION = USER_ID
    res.status(200).send("Logout")
}

module.exports = logout;