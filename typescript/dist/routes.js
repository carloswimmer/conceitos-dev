"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: 'carlos@gmail.com',
        password: '14314124312',
        techs: [
            'Node.js',
            'React',
            'React Native',
            { title: 'Javascript', experience: 100 }
        ]
    });
    console.log(user.email);
    return response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
