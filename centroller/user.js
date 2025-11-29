const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const passport = require('passport');

module.exports.renderSignupForm =(req,res) => {
res.render('users/signup.ejs');
};


module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", `Welcome to Yaatra, ${username} !`);
      res.redirect("/listings");
    });

  } catch (e) {
    console.log("Signup error:", e);
    req.flash("error", e.message); 
    res.redirect("/signup");
  }
};

module.exports.loginForm = (req,res)=> {
    res.render("users/login.ejs")
}

module.exports.login = [
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true, // optional, if using flash messages
  }),
  async (req, res) => {
    res.redirect("/listings");
  }
];

module.exports.logout = (req,res) => {
  req.logout((err) => {
    if(err) {
     return  next(err);
    }
   req.flash("sucess","you are logged out");
   res.redirect("/listings");
  })
};
