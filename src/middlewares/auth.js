let jwt = require('jsonwebtoken');
let authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    let authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ error: 'Token não informado!' });
    }

    let parts = authHeader.split(' ');

    if (!parts.length === 2) {
        return res.status(401).send({ error: 'Token com problema' })
    }

    let [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token com mal formato' });
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalido!' })

        req.userId = decoded.id;
        return next();
    });
} 