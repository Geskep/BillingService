import {model, Schema} from 'mongoose';

let OutlaySchema = new Schema({
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    associatedId: { type: String, required: true },
    totalIncomes: { type: Number, required: true },
    totalDeductibles: { type: Number, required: true },
    deductibles: { type: Array, required: true }
}, {timestamps: true});

export const Outlay = model("Outlay", OutlaySchema);
