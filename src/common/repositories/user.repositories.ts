import { Repository } from "typeorm";
import { User } from "../entities/user.entities";
import { AppDataSource } from "../../database/data-source";

export default class UserRepository {
    private readonly repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    async find() {
        return await this.repository.find();
    }

    async findOne(id: number) {
        return await this.repository.findOneBy({ id });
    }

    async findByEmail(email: string) {
        return await this.repository.findOneBy({ email });
    }

    async create(data: Partial<User>) {
      
        const user = this.repository.create(data);
        console.log(user);
        return await this.repository.save(user);
    }
}
