const { showData } = require('../models/user.model');

const registerView = async (req, res) => {
    let userStatusInfos = await showData();
    console.log(userStatusInfos);
    res.render('register', {});
}

const loginView  = (req, res) => {
    res.render('login', {});
}

module.exports = {
    registerView,
    loginView
}