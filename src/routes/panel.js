let express = require('express');
let authMiddleware = require('../middlewares/auth');

let router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId })
});

module.exports = app => app.use('/panel', router);