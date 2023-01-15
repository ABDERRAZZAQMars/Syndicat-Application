const express = require('express')
const router = express.Router()

const { CreateClient, UpdateClient, DeleteClient, GetAllClient, getSingleClient } = require('../controllers/ClientController')

router.post('/client', CreateClient)
router.put('/client/:id', UpdateClient)
router.delete('/client/:id', DeleteClient)
router.get('/clients', GetAllClient)
router.get('/client/:id', getSingleClient)

module.exports = router