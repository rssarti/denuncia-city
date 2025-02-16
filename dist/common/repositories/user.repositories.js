"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entities_1 = require("../entities/user.entities");
const data_source_1 = require("../../database/data-source");
class UserRepository {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(user_entities_1.User);
    }
    async find() {
        return await this.repository.find();
    }
    async create(data) {
        const user = this.repository.create(data);
        return await this.repository.save(user);
    }
}
exports.default = UserRepository;
