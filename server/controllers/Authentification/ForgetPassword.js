// method : post
// url : api/auth/forgetpassword
// acces : Public
const asyncHandler = require('express-async-handler')
const User = require('../../models/user/UserModel')
const generateToken = require('./JWT')
const {resetPasswordEmail } = require('../../utils/SendEmail')

const forgetPassword = asyncHandler(async (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.status(200).json({ message: 'Please ADD field' })
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
    return res.status(200).json({ message: 'Invalid email' })
})

module.exports = forgetPassword