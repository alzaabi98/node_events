const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')

//  login user view 
router.get('/login', (req,res)=> {
    res.render('user/login')
})

// login post request 
router.post('/login', (req,res)=> {
    console.log(req.body)
    res.json('login in user ... ')
})

// sign up form 
router.get('/signup', (req,res)=> {
    res.render('user/signup', {
        error: req.flash('error')
    })
})

// sign up post request

router.post('/signup',
  passport.authenticate('local.signup', {
    successRedirect: '/users/profile',
      failureRedirect: '/users/signup',
      failureFlash: true })
      )

// progile 
router.get('/profile', (req,res)=> {
    res.render('user/profile', {
        success: req.flash('success')
    })
})

// logout user

router.get('/logout', (req,res)=> {
    res.json('logout user')
})

module.exports = router