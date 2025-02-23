"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
console.log('+++++++++', process.env.MONGO_URI);
if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is required');
}
const mongoUri = process.env.MONGO_URI;
const connectDb = async function () {
    try {
        await mongoose_1.default.connect(mongoUri);
        console.log('db connected successfully');
    }
    catch (error) {
        console.log('error connecting db', error);
    }
};
exports.connectDb = connectDb;
