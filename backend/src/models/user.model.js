import { Schema, model } from "mongoose";

const userSechema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const userModel = model('user', userSechema)