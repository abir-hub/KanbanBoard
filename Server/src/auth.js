const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const authenticateJWT = require('./middleware');

dotenv.config();

const router = express.Router();

const users = [
    { id: 1, username: 'user1', password: '$2a$10$8uOpkS88CwY27v9cXYgyf.wMgm5DkRpl6I0V3cq0FVcDhdQ0y/2k2' } // password: "password123"
];

//Helper function to generate JWT token
const generateToken = (user) => {
    return jwt.sign(
        {id: user.id, username: user.username},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}
    );
}

//singup route (For simplicity, password is already hashed)
router.post('/signup', async (req, res) => {
    const {username, password} = req.body;

    //check if user is already exists
    if(users.find(user => user.username === username)) {
        return res.status(400).json({message: 'User already exists'});
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    //create new user
    const newUser = {
        id: users.length + 1,
        username,
        password: hashedPassword
    };
    users.push(newUser);

    //generate JWT token
    const token = generateToken(newUser);
    res.status(201).json({message: 'User created', token});
});

//Login route
router.post('/Login', async (req, res) => {
    const {username, password} = req.body;

    //check if user exists
    const user = users.find(user => user.username === username);
    if(!user) {
        return res.status(400).json({message: 'User not found'});
    }

    //check if password is correct
    if(!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({message: 'Invalid credentials'});
    }

    //generate JWT token
    const token = generateToken(user);
    res.status(200).json({message: 'Login successful', token});
});

router.get('/dashboard', authenticateJWT, (req, res) => {
    res.status(200).json({message: 'Dashboard', user: req.user});
});

module.exports = router;