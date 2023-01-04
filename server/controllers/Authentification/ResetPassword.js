// method : post
// url : api/auth/resetpassword/:token
// acces : Public
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../../models/user/UserModel')

const resetPassword = asyncHandler(async (req, res) => {
    const token = req.params.token
    const { password, password2 } = req.body
    if (!password || !password2) {
        return res.status(200).json({ message: 'Please ADD field' })
    } else if (password != password2) {
        return res.status(200).json({ message: 'Password not match' })
    }
    const user = await User.findOne({ token })
    if (user) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        user.password = hashedPassword
        user.save()
        return res.status(200).json({ message: 'Your Password is Reset' })
    } else {
        return res.status(200).json({ message: 'Token not valide' })
    }
})

module.exports = resetPassword