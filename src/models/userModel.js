const {Schema, model} = require('mongoose');

const userShema = new Schema({
    _id: {type: "String", required: true},
    name: {type: "String", required: true},
    /** etc */
});

const model = model('User', userShema, 'user');