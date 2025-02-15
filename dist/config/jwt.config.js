"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET ?? 'default_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '1h';
class JwtService {
    static generateToken(payload) {
        return jsonwebtoken_1.default.sign(payload, JWT_SECRET);
    }
    static verifyToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, JWT_SECRET);
        }
        catch (error) {
            return null;
        }
    }
}
exports.JwtService = JwtService;
