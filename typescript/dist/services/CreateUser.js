"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password;
    var user = {
        name: name,
        email: email,
        password: password
    };
    return user;
}
exports.default = CreateUser;
