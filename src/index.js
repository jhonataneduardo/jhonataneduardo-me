// routers
module.exports = (app) => {
    app.use('/dashboard', require('./routes/dashboard'))
    app.use('/users', require('./routes/users'))
}