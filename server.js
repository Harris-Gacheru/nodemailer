"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emailService_1 = __importDefault(require("./emailService/emailService"));
const app = (0, express_1.default)();
const PORT = 4300;
(0, emailService_1.default)('mailtest3606@gmail.com', 'John doe');
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
});
