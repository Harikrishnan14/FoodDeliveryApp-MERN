const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');


router.post('/createuser', [
    body('name', 'Name should contain atleast 5 characters').isLength({ min: 5 }),
    body('email', 'Invalid email').isEmail(),
    body('password', 'Password should contain atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        })
        res.json({ success: true })
    } catch (error) {
        console.log(error);
        res.json({ success: false })
    }
})

router.post('/login', [
    body('email', 'Invalid email').isEmail(),
    body('password', 'Password should contain atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    let { email, password } = req.body
    try {
        let userData = await User.findOne({ email })
        if (!userData) {
            return res.status(400).json({ error: "Invalid Login Credentials" });
        }
        if (password !== userData.password) {
            return res.status(400).json({ error: "Invalid Login Credentials" });
        }
        return res.json({ success: true })
    } catch (error) {
        console.log(error);
        res.json({ success: false })
    }
})


module.exports = router;
