import { Schema, model } from "mongoose";

const userShema = new Schema({
    _id: {type: "String", required: true},
    name: {type: "String", required: true},
    /** etc */
});

export default model('User', userShema, 'user');