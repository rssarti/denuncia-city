import { Repository } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import { Complaint } from "../entities/complaint.entites";

export default class ComplaintRepository {
    private readonly repository: Repository<Complaint>;

    constructor() {
        this.repository = AppDataSource.getRepository(Complaint);
    }

    async find() {
        return await this.repository.find();
    }

    async findOne(id: number) {
        return await this.repository.findOneBy({ id });
    }

    async findByUserId(user_id: number) {
        return await this.repository.find({ where: { user_id } });
    }

    async create(data: Partial<Complaint>) {
        console.log('chegou no create', data);
        const complaint = this.repository.create(data);
        return await this.repository.save(complaint);
    }
}