// method : post
// url : api/auth/login
// acces : Public
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const generateToken = require('./JWT')
const cookie = require('cookie-parser')
const User = require('../../models/user/UserModel')

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate('role')
    if (user && (await bcrypt.compare(password, user.password))) {
        const tokengenerat = generateToken(user._id)
        res.cookie('access', tokengenerat)
        if (user.verified == true) {
            return res.status(200).json({
                message: 'Welcome to profil',
                _id: user._id,
                name: user.name,
                email: user.email,
                verified: user.verified,
                token: tokengenerat,
                role: user.role
            })
        } else { return res.status(200).json({ message: 'User not verified' }) }
    } else { return res.status(200).json({ message: 'Invalid Email Or Password' }) }
})

module.exports = login