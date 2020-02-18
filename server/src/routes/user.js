const router = require('express').Router()
const UserController = require('../controllers/userController')

// user
router.post('/register', UserController.register)
router.get('/login', UserController.login)
router.get('/list', UserController.list)

module.exports = router