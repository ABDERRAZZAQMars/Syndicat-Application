const express = require('express')
const router = express.Router()

//Les Function Authentification
const {login,register,forgetPassword,resetPassword,verifyToken} = require('../controllers/Authentification/indexAuth')

//url : /api/auth
router.post('/login', login)
router.post('/register/', register)
router.post('/forgetpassword', forgetPassword)
router.post('/resetpassword/:token', resetPassword)
router.get('/user/:id/confirm/:token', verifyToken)


module.exports = router