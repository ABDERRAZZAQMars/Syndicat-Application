const express = require('express')
const router = express.Router()

//Les Function Authentification
const { Login, Register, ForgetPassword, ResetPassword, Verify } = require('../controllers/AuthController')

//url : /api/auth
router.post('/login', Login)
router.post('/register/', Register)
router.post('/forgetpassword', ForgetPassword)
router.post('/resetpassword/:token', ResetPassword)
router.get('/user/:id/confirm/:token', Verify)


module.exports = router