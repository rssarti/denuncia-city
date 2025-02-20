import { Repository } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import { Complaint } from "../entities/complaint.entites";
import { Category } from "../entities/category.entities";

export default class CategoryRepository {
    private readonly repository: Repository<Category>;

    constructor() {
        this.repository = AppDataSource.getRepository(Category);
    }

    async find() {
        return await this.repository.find();
    }

    async findOne(id: number) {
        return await this.repository.findOneBy({ id });
    }

    async create(data: Partial<Complaint>) {
        const complaint = this.repository.create(data);
        return await this.repository.save(complaint);
    }
}