const express = require("express");
const { getHomePage, getLoginPage } = require("../Controller/viewController");

const viewRouter = express.Router();

viewRouter.route("/").get(getHomePage);
viewRouter.route("/login").get(getLoginPage);

module.exports = viewRouter; 
