const express = require('express')
const router = express.Router()

//Les Function Authentification
const { Login, Register, ForgetPassword, ResetPassword } = require('../controllers/AuthController')

//url : /api/auth
router.post('/login', Login)
router.post('/register/', Register)
router.post('/forgetpassword', ForgetPassword)
router.post('/resetpassword/:token', ResetPassword)


module.exports = router