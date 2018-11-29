import {model, Schema, Error, Types} from 'mongoose';
import bcrypt from "bcrypt-nodejs";

let UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    active: { type: Boolean, default: true },
    token: { type: String }
}, {timestamps: true});

UserSchema.pre('save', function save(this: any, next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(12, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidate: string) {
    return bcrypt.compareSync(candidate, this.password);
};

UserSchema.methods.generateToken = function() {
    this.token = Types.ObjectId().toHexString();
    return this.save();
};

export const User = model("User", UserSchema);
