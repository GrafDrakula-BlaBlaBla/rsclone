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
// const createError = require("http-errors"); errors code
var express = require("express");
var mongoose = require("mongoose");
var config = require("config");
var logger = require("morgan");
var path = require('path');
var routeSignup_1 = require("./routes/auth/routeSignup");
var routeAuth_1 = require("./routes/auth/routeAuth");
var completionEvent_1 = require("./routes/event/completionEvent");
var createEvent_1 = require("./routes/event/createEvent");
var dataForProfile_1 = require("./routes/profile/dataForProfile");
var dataEventUser_1 = require("./routes/profile/dataEventUser");
var cors_middleware_1 = require("./middleware/cors.middleware");
var createMapMain_1 = require("./routes/event/createMapMain");
var eventInfo_1 = require("./routes/event/eventInfo");
var dataAboutNowEvents_1 = require("./routes/profile/dataAboutNowEvents");
var dataAboutPastEvents_1 = require("./routes/profile/dataAboutPastEvents");
var dataAboutFeatureEvents_1 = require("./routes/profile/dataAboutFeatureEvents");
var comleteEvent_1 = require("./routes/event/comleteEvent");
var addUserEvent_1 = require("./routes/event/addUserEvent");
var userInfo_1 = require("./routes/userInfo");
var PORT = process.env.PORT || 5000;
// * Создание сервера
var app = express();
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/client/build/index.html'));
});
app.use(express.static('./client/build'));
app.use(cors_middleware_1.default);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// routing folders
app.use("/", completionEvent_1.default);
app.use("/", routeSignup_1.default);
app.use("/", routeAuth_1.default);
app.use("/", createEvent_1.default);
app.use("/", createMapMain_1.default);
app.use("/", dataForProfile_1.default);
app.use("/", eventInfo_1.default);
app.use("/", dataEventUser_1.default);
app.use("/", dataAboutNowEvents_1.default);
app.use("/", dataAboutPastEvents_1.default);
app.use("/", dataAboutFeatureEvents_1.default);
app.use("/", comleteEvent_1.default);
app.use("/", userInfo_1.default);
app.use("/", addUserEvent_1.default);
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mongoose.connect(config.get("urlDB"), { useNewUrlParser: true, useUnifiedTopology: true })];
            case 1:
                _a.sent();
                app.listen(PORT, function () {
                    console.info("Server has been started on port " + PORT);
                });
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.warn("An error has occurred: " + e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
start();
exports.default = app;
//# sourceMappingURL=app.js.map