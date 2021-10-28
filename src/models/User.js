import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userShema = new Schema({
    _id: {type: "string", required: true},
    userId: {type: "string", required: true, unique: true},
    name: {type: "string", required: true},
    lastName: {type: "string", required: true},
    email: {type: "string", required: true},
    tel: {type: "string", required: true},
    adresse: {type: "string", required: true},
    password: {type: "string", required: true},
    status: {type: "number", default: 1},
    type: {type: "number", default: 1},
    rigths: ["string"],
    dateAdd: {type: "Date", default: Date.now()},
    dateSet: {type: "Date", default: Date.now()},
    competences: [{
        label: {type: "string", required: true},
        level: {type: "number", required: true}
    }],
    contacts: [{
        type: {type: "string", required: true},
        value: {type: "string", required: true}
    }]
});

export default model('User', userShema, 'user');