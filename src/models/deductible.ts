import {model, Schema} from 'mongoose';

let DeductibleSchema = new Schema({
    name: { type: String, required: true, index: { unique: true } },
    required: { type: Boolean, default: false },
    amount: { type: Number, required: true },
    type: { type: String, required: true }
}, {timestamps: true});

export const Deductible = model("Deductible", DeductibleSchema);
