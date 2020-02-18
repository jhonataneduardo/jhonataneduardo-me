const User = require('../models/user')

const UserController = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            return res.send({ user })
        } catch (err) {
            return res.status(400).send({ 'error': err})
        }
    },
    login(req, res) {
        res.send('LOGIN!!')
    },
    async list(req, res) {
        try {
            const users = await User.find()
            return res.send({ users })
        } catch (err) {
            return res.status(400).send({ 'error': err})
        }
    }
}

module.exports = UserController