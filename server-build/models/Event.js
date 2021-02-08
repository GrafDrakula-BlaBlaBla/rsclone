"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Event = new mongoose_1.Schema({
    idEventCalendarGoogle: { type: String, required: true },
    eventTitle: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: Object, required: true },
    goal: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    completed: { type: Boolean },
    members: { type: Array }
});
exports.default = mongoose_1.model("Event", Event);
//# sourceMappingURL=Event.js.map