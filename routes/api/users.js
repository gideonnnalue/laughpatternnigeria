const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// multer

const multer = require('multer');
const upload = multer({
    dest: 'images'
});

// Load input validators
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Test users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Working" }));

// @route   POST api/users/register
// @desc    Registe User route
// @access  Public
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(404).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route   POST api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check for user
        if (!user) {
            return res.status(404).json({ email: "User not found" });
        }

        // Check Password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User Matched

                const payload = { id: user.id, name: user.name }; // Create JWT payload

                // Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res.status(400).json({ password: "Password incorrect" });
            }
        });
    });
});

// @route   POST api/users/current
// @desc    Return current User
// @access  Private
router.get(
    "/current",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        res.json({
            id: req.user.id,
            email: req.user.email
        });
    }
);

router.post('/upload', upload.single('upload'), (req, res) => {
    res.json({msg: "working"})
})

module.exports = router;
