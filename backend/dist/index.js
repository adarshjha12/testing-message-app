"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = require("./db/connection");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
(0, connection_1.connectDb)();
console.log(process.env.PORT);
console.log(process.env.MONGO_URI);
app.listen(port, () => {
    console.log(`running on ${port}`);
});
