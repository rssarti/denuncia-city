"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_repositories_1 = __importDefault(require("../../common/repositories/user.repositories"));
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_dto_1 = require("../../common/dtos/user.dto");
class UserService {
    constructor() {
        this.repository = new user_repositories_1.default();
    }
    async listUsers() {
        const users = await this.repository.find();
        return users.map(({ id, name, email, created_at, updated_at }) => ({ id, name, email, created_at, updated_at }));
    }
    async findOne(id) {
        const user = await this.repository.findOne(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.repository.findByEmail(email);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    async createUser(data) {
        const userData = (0, class_transformer_1.plainToClass)(user_dto_1.CreateUserDTO, data);
        const errors = await (0, class_validator_1.validate)(userData);
        if (errors.length > 0) {
            throw new Error(errors.toString());
        }
        const salt = await bcryptjs_1.default.genSalt(10);
        if (!data.password) {
            throw new Error("Password is required");
        }
        const hashedPassword = await bcryptjs_1.default.hash(data.password, salt);
        data.password = hashedPassword;
        const savedUser = await this.repository.create(data);
        return savedUser;
    }
    async authenticateUser(email, password) {
        const user = await this.repository.findByEmail(email);
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET ?? "false", { expiresIn: "1h" });
        return { token };
    }
}
exports.userService = new UserService();
