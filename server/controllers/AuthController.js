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
   
})

// method : post
// url : api/auth/forgetpassword
// acces : Public
const ForgetPassword = (req, res) => {
    return res.status(200).json({ message: 'this function Forget Password' })
}

// method : post
// url : api/auth/resetpassword/:token
// acces : Public
const ResetPassword = (req, res) => {
    return res.status(200).json({ message: 'this function Reset Password' })
}

module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
}