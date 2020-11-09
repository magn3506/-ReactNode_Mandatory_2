const logout = (req, res) => {
    res.clearCookie('userID');
    res.status(200).send("Logout")
}

module.exports = logout;