const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'SecretStr!ng'


router.post('/createuser', [
    body('name', 'Name should contain atleast 5 characters').isLength({ min: 5 }),
    body('email', 'Invalid email').isEmail(),
    body('password', 'Password should contain atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcryptjs.genSalt(10);
    let secPass = await bcryptjs.hash(req.body.password, salt)

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
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

        const pwdCompare = await bcryptjs.compare(req.body.password, userData.password)

        if (!pwdCompare) {
            return res.status(400).json({ error: "Invalid Login Credentials" });
        }

        const data = {
            user: {
                id: userData.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)

        return res.json({ success: true, authToken: authToken })
    } catch (error) {
        console.log(error);
        res.json({ success: false })
    }
})


module.exports = router;
