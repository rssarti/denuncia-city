"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_repositories_1 = __importDefault(require("../../common/repositories/user.repositories"));
class UserService {
    constructor() {
        this.repository = new user_repositories_1.default();
    }
    async listUsers() {
        return await this.repository.find();
    }
    async createUser(data) {
        const salt = await bcryptjs_1.default.genSalt(10);
        if (!data.password) {
            throw new Error("Password is required");
        }
        const hashedPassword = await bcryptjs_1.default.hash(data.password, salt);
        data.password = hashedPassword;
        const savedUser = await this.repository.create(data);
        return savedUser;
    }
}
exports.userService = new UserService();
