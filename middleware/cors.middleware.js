"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
}
exports.default = cors;
//# sourceMappingURL=cors.middleware.js.map