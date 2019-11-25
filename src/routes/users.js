let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.send('Router users start!!')
})

module.exports = router