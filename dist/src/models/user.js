"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.User = mongoose_1.model("User", new mongoose_1.Schema({
    username: String,
    password: String
}));
//# sourceMappingURL=user.js.map