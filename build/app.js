"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = 8080;
app.listen(PORT, function () {
    console.log("==========================");
    console.log("Server Started on port");
    console.log("==========================");
});
