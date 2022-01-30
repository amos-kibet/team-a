"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import router from ".././modules/auth/index";
const auth_1 = __importDefault(require("../modules/auth"));
const apiPrefix = "/api/v1";
const routes = (app) => {
    app.use(apiPrefix, auth_1.default);
    return app;
};
exports.default = routes;
