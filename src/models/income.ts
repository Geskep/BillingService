import {model, Schema} from 'mongoose';

let IncomeSchema = new Schema({
    amount: { type: Number, required: true },
    associatedId: { type: String, required: true },
    date: { type: Date, required: true },
    payed: { type: String },
    description: { type: String }
}, {timestamps: true});

export const Income = model("Income", IncomeSchema);
