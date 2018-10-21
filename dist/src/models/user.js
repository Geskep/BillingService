"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_nodejs_1 = __importDefault(require("bcrypt-nodejs"));
let UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
}, { timestamps: true });
UserSchema.pre('save', function save(next) {
    const user = this;
    console.log(user);
    if (!user.isModified('password'))
        return next();
    bcrypt_nodejs_1.default.genSalt(12, (err, salt) => {
        if (err)
            return next(err);
        bcrypt_nodejs_1.default.hash(user.password, salt, null, (err, hash) => {
            if (err)
                return next(err);
            user.password = hash;
            next();
        });
    });
});
UserSchema.methods.comparePassword = (candidate, cb) => {
    bcrypt_nodejs_1.default.compare(candidate, this.password, cb);
};
exports.User = mongoose_1.model("User", UserSchema);
//# sourceMappingURL=user.js.map