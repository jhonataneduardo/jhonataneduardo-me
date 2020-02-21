const router = require('express').Router()
const UserController = require('../controllers/userController')
const isAuth = require('../middleware/auth')

// user
router.post('/register', UserController.register)
router.get('/login', UserController.login)
router.get('/list', isAuth, UserController.list)

module.exports = router