let express = require('express');
let mongoose = require('../database');
let User = require('../models/user');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let authConfig = require('../config/auth');

let router = express.Router();

let generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

router.post('/register', async (req, res) => {

    let { email } = req.body;

    try {
        
        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'Este e-mail já existe! '});
        }

        let user = await User.create(req.body)

        user.password = undefined;

        return res.send({ 
            user,
            token: generateToken({ id: user.id })
         })

    } catch (err) {

        return res.status(400).send({ error: 'Registro invalido...' })

    }

});

router.post('/authenticate', async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({ email }).select('+password');

    if (!user) {
        return res.status(400).send({ error: 'Usuário não encontrado!' });
    }
    
    if(!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'Senha invalida!' });
    }

    user.password = undefined;

    res.send({ 
        user, 
        token: generateToken({ id: user.id }) 
    });

});

module.exports = app => app.use('/auth', router);