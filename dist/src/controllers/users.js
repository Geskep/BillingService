"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
class UsersController {
    static create(data) {
        let user = new user_1.User(data);
        console.log(user);
        (user.save()
            .then((user) => {
            console.log(user);
            return user;
        })
            .catch((err) => {
            console.log(err);
            return null;
        }));
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.js.map