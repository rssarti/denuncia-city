"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repositories_1 = __importDefault(require("../../common/repositories/user.repositories"));
class UserService {
    async listUsers() {
        const repository = new user_repositories_1.default();
        return await repository.find();
    }
    async createUser(data) {
        const repository = new user_repositories_1.default();
        return await repository.create(data);
    }
}
exports.userService = new UserService();
