"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
class UsersController {
    static login(data) {
        return new Promise((resolve, reject) => {
            user_1.User.findOne({ username: data.username, password: data.password }, (err, user) => {
                if (err)
                    reject(err);
                else if (!user)
                    reject(new Error("Login failed."));
                else
                    resolve(user);
            });
        });
    }
    static create(data) {
        return new user_1.User(data).save();
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.js.map