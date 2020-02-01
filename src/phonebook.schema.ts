import * as mongoose from 'mongoose';

export const PhoneBookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true }
});