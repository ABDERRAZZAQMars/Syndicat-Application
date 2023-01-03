const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user/UserModel')
const RoleModel = require('../models/user/RoleModel')
const { sendConfirmationEmail, resetPasswordEmail } = require('../utils/SendEmail')
const cookie = require('cookie-parser')

// method : post
// url : api/auth/register
// acces : Public
const Register = (req, res) => {
    return res.status(200).json({ message: 'this function Register' })
}

// method : post
// url : api/auth/login
// acces : Public
const Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate('role')
    if (user && (await bcrypt.compare(password, user.password))) {
        const tokengenerat = generateToken(user._id)
        res.cookie('access', tokengenerat)
        if (user.verified == true) {
            res.status(200).json({
                message: 'Welcome to profil',
                _id: user._id,
                name: user.name,
                email: user.email,
                verified: user.verified,
                token: tokengenerat,
                role: user.role
            })
            return res.status(200).json({ message: 'User is verified' })
        } else { return res.status(401).json({ message: 'User not verified' }) }
    } else { return res.status(401).json({ message: 'Invalid Email Or Password' }) }
})

// method : post
// url : api/auth/forgetpassword
// acces : Public
const ForgetPassword = asyncHandler(async (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.status(400).json({ message: 'Please ADD field' })
    }
    const user = await User.findOne({ email })
    if (user) {
        let token = generateToken(user._id)
        token = token.split(".").join("")
        user.token = token
        user.save()
        await resetPasswordEmail(user.name, user.email, user.token)
        return res.status(200).send('plaise check your email for reset your password of email')
    }
    return res.status(400).json({ message: 'Invalid email' })
})

// method : post
// url : api/auth/resetpassword/:token
// acces : Public
const ResetPassword = (req, res) => {
    return res.status(200).json({ message: 'this function Reset Password' })
}

// Generate JSON WEB TOKEN (JWT)
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}

// Verify Token
const Verify = async (req, res) => {
    const token = req.params.token
    const id = req.params.id
    const user = await User.findById(id)
    if (user.verified == false && user.token == token) {
        user.verified = true
        user.save()
        return res.status(200).json({ message: 'Token is verified' })
    } else { return res.status(400).send('token not valid') }
}

module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
}