import {model, Schema, Error} from 'mongoose';
import bcrypt from "bcrypt-nodejs";

let UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
}, {timestamps: true});

UserSchema.pre('save', function save(this: any, next) {
    const user = this;
    console.log(user);
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

UserSchema.methods.comparePassword = (candidate: string, cb: (err: Error, isMatch: boolean) => void) => {
    bcrypt.compare(candidate, this.password, cb);
};

export const User = model("User", UserSchema);
