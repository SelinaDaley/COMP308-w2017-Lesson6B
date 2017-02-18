// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// define the user models
let UserModel = require('../models/users');
let User = UserModel.User;// alias for User Model - User object

// define the game model
let game = require('../models/games');

// create a function to check if the user is authenticated
function requireAuth(req, res, next) {
  // check if the user is logged index
  if(!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    games: ''
   });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact',
    games: ''
   });
});

// GET /login - render the login view
router.get('/login', (req, res, next) => {
  // check to see if the user is not already logged index
  if(!req.user) {
    // render the login page
    res.render('auth/login', {
      title: 'Login',
      games: '',
      messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
    return;
  } else {
    return res.redirect('/games');// redirect to games list
  }
});

// POST /login - process the login attempt
router.post('/login', (req, res, next) => {

});

// GET /register - render the registration view
router.get('/register', (req, res, next) => {
  //check to see if the user is not already logged index
  if(!req.user) {

    //TODO
    
  } else {
    return res.redirect('/games');// redirect to games list
  }
});

// POST /register - process the registration submission
router.post('/register', (req, res, next) => {

});

// GET /logout - 

module.exports = router;