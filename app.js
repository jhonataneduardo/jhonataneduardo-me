let express = require('express')
let createError = require('http-errors')
let path = require('path')

// app
let app = express()

// statics files
app.set(express.static(path.join(__dirname, 'public')))

// router
require('./src/index')(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404, 'Página não encontrada :('))
})

// server
app.listen(3000, () => {
    console.log('Start server OK!!!')
})


