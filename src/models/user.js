let mongoose = require('../database');
let bcrypt = require('bcrypt');

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function(next) {
    let hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

let User = mongoose.model('User', UserSchema);

module.exports = User;