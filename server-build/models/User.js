"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var User = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    range: { type: Number },
    avatar: { type: String },
    dataRegistartion: { type: Date },
    sex: { type: String },
    contacts: { type: Array },
    location: { type: String },
    finishedGameDate: { type: Date },
});
exports.default = mongoose_1.model("User", User);
//# sourceMappingURL=User.js.map