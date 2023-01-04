// method : post
// url : api/auth/register
// acces : Public
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../../models/user/UserModel')
const RoleModel = require('../../models/user/RoleModel')
const generateToken = require('./JWT')
const { sendConfirmationEmail, resetPasswordEmail } = require('../../utils/SendEmail')

const register = asyncHandler(async (req, res) => {
    const { name, email, password, token, verified, role } = req.body
    console.log(req.body);
    if (!name || !email || !password) {
        return res.status(200).json({ message: 'Please ADD All Fields' })
    }
    // Check if user exists
    userExists = await User.findOne({ email })
    const roles = await RoleModel.findOne({ role })
    if (userExists) {
        return res.status(200).json({ message: 'User already exists' })
    }
    // Hashed Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        token: generateToken(),
        verified,
        role: roles.id
    })

    if (user) {
        if (user.verified == false) {
            sendConfirmationEmail(
                user.name,
                user.email,
                user.token,
                user.id,
                user.verified
            );
            return res.status(200).send({ message: "Pending Account. Please Verify Your Email!" })
        }
    } else {
        return res.status(400).json({ message: 'Invalid user data' })
    }
})

module.exports = register