import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userShema = new Schema({
    _id: {type: "string", required: true},
    userId: {type: "string", required: true, unique: true},
    name: {type: "string", required: true},
    lastName: {type: "string", required: true},
    status: {type: "number", default: 1},
    type: {type: "number", default: 1},
    dateAdd: {type: "Date", default: Date.now()},
    dateSet: {type: "Date", default: Date.now()},
    /** etc */
});

export default model('User', userShema, 'user');