import {model, Schema} from 'mongoose';

let AssociatedSchema = new Schema({
    identification: { type: String, required: true, index: { unique: true } },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    due: { type: Number, default: 0 },
    description: { type: String }
}, {timestamps: true});

export const Associated = model("Associated", AssociatedSchema);
