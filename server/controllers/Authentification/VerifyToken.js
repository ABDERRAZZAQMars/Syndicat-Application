// Verify Token
const User = require('../../models/user/UserModel')

const verifyToken = async (req, res) => {
    const token = req.params.token
    const id = req.params.id
    const user = await User.findById(id)
    if (user.verified == false && user.token == token) {
        user.verified = true
        user.save()
        return res.status(200).json({ message: 'Token is verified' })
    } else { return res.status(400).send('token not valid') }
}

module.exports = verifyToken