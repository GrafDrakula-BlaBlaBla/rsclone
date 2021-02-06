"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
function returnOneUser(idUser, data) {
    var result = axios_1.default.post(process.env.REACT_APP_SERVER + 'data-edit-profile', {
        idUser: idUser,
        data: data
    })
        .then(function (response) {
        if (response.status === 200) {
            return response.data;
        }
    })
        .catch(function (error) {
        console.log(error);
    });
    return result;
}
exports.default = returnOneUser;
//# sourceMappingURL=editProfile.js.map