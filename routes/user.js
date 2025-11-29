const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const passport = require('passport');
const {signup} = require("../centroller/user.js");
const {renderSignupForm} = require("../centroller/user.js");
const {login} = require("../centroller/user.js");
const {loginForm} = require("../centroller/user.js");
const {logout} = require("../centroller/user.js");



//Signup form 
router.get("/signup", renderSignupForm);


// Signup Route
router.post("/signup", signup)



//loginForm
router.get("/login", loginForm)



//login route
router.post("/login", login);



//logout
router.get("/logout", logout)


module.exports = router;