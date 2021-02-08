"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Event_1 = require("../../models/Event");
var User_1 = require("../../models/User");
var fs = require('fs');
var path = require('path');
var KEYFILE = "key/keyGoogleCalandar.json";
var CALENDAR_ID = 'bosba9d@gmail.com';
var SCOPE_CALENDAR = 'https://www.googleapis.com/auth/calendar';
var SCOPE_EVENTS = 'https://www.googleapis.com/auth/calendar.events';
var google = require('googleapis').google;
var routerEvent = express_1.Router();
routerEvent.post("/create", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    function readPrivateKey() {
        return __awaiter(this, void 0, void 0, function () {
            var dirPath, content;
            return __generator(this, function (_a) {
                dirPath = path.join(__dirname, KEYFILE);
                content = fs.readFileSync(dirPath);
                return [2 /*return*/, JSON.parse(content.toString())];
            });
        });
    }
    function authenticate(key) {
        return __awaiter(this, void 0, void 0, function () {
            var jwtClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, [SCOPE_CALENDAR, SCOPE_EVENTS]);
                        return [4 /*yield*/, jwtClient.authorize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, jwtClient];
                }
            });
        });
    }
    function createEvent(auth, eventTitle, description, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function () {
            var event, calendar, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event = {
                            'summary': eventTitle,
                            'description': description,
                            'start': {
                                'dateTime': startDate,
                                'timeZone': 'Europe/Minsk',
                            },
                            'end': {
                                'dateTime': endDate,
                                'timeZone': 'Europe/Minsk',
                            }
                        };
                        calendar = google.calendar('v3');
                        return [4 /*yield*/, calendar.events.insert({
                                auth: auth,
                                calendarId: CALENDAR_ID,
                                resource: event,
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.id];
                }
            });
        });
    }
    var _a, eventTitle, startDate, endDate, location_1, goal, description, user, key, auth, idEventCalendarGoogle, completed, event_1, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 8, , 9]);
                return [4 /*yield*/, req.body.event];
            case 1:
                _a = _b.sent(), eventTitle = _a.eventTitle, startDate = _a.startDate, endDate = _a.endDate, location_1 = _a.location, goal = _a.goal, description = _a.description, user = _a.user;
                startDate = new Date(startDate);
                startDate = startDate.toJSON();
                endDate = new Date(endDate);
                endDate = endDate.toJSON();
                return [4 /*yield*/, readPrivateKey()];
            case 2:
                key = _b.sent();
                return [4 /*yield*/, authenticate(key)];
            case 3:
                auth = _b.sent();
                return [4 /*yield*/, createEvent(auth, eventTitle, description, startDate, endDate)];
            case 4:
                idEventCalendarGoogle = _b.sent();
                completed = false;
                event_1 = new Event_1.default({
                    idEventCalendarGoogle: idEventCalendarGoogle,
                    eventTitle: eventTitle,
                    startDate: startDate,
                    endDate: endDate,
                    location: location_1,
                    goal: goal,
                    description: description,
                    user: user,
                    completed: completed,
                });
                return [4 /*yield*/, User_1.default.update({ _id: user }, { $inc: { range: 100 } })];
            case 5:
                _b.sent();
                return [4 /*yield*/, event_1.save()];
            case 6:
                _b.sent();
                return [4 /*yield*/, res.json({ message: "no error" })];
            case 7: return [2 /*return*/, _b.sent()];
            case 8:
                e_1 = _b.sent();
                res.send({ message: "SERVWR ERROR " + e_1 });
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
exports.default = routerEvent;
//# sourceMappingURL=createEvent.js.map