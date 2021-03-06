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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ejs_1 = __importDefault(require("ejs"));
const configuration = {
    port: 587,
    host: 'smtp.gmail.com',
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
};
const createTransporter = (config) => {
    let transporter = nodemailer_1.default.createTransport(config);
    return transporter;
};
const sendEmail = (email, name) => __awaiter(void 0, void 0, void 0, function* () {
    yield ejs_1.default.renderFile('./templates/welcomeEmail.ejs', { name: name }, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        let transport = createTransporter(configuration);
        let mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Welcome to nodemailer class 101',
            text: 'Learning to use nodemailer',
            html: data
        };
        try {
            yield transport.sendMail(mailOptions);
            console.log(`Email sent successully`);
        }
        catch (error) {
            console.log(`Error: ${error}`);
        }
    }));
});
exports.default = sendEmail;
