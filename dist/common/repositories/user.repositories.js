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
    async findOne(id) {
        return await this.repository.findOneBy({ id });
    }
    async findByEmail(email) {
        return await this.repository.findOneBy({ email });
    }
    async create(data) {
        const user = this.repository.create(data);
        console.log(user);
        return await this.repository.save(user);
    }
}
exports.default = UserRepository;
