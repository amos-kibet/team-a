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
const mail_1 = __importDefault(require("@sendgrid/mail"));
// go thro their docs 
class SendGridHelper {
    static sendConfirmationMail(token, emailAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const server = process.env.SERVER || 'https://localhost:8000/';
            mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
            const msg = {
                to: emailAddress,
                from: `${process.env.EMAIL}`,
                templateId: `${process.env.WELCOME_MAIL_ID}`,
                dynamic_template_data: {
                    link: `${process.env.FRONTEND_URL}verification/${token}`
                }
            };
            mail_1.default
                .send(msg)
                .then(() => { }, error => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body);
                }
            });
        });
    }
}
exports.default = SendGridHelper;
