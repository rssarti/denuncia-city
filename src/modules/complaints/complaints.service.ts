import { plainToClass } from "class-transformer";
import { CreateComplaintDto } from "../../common/dtos/complaints.dto";
import { Complaint } from "../../common/entities/complaint.entites";
import { validate } from "class-validator";
import ComplaintRepository from "../../common/repositories/complaint.repositories";

class ComplaintsService {
  public complaints: string[];
  private readonly repository: ComplaintRepository;

  constructor() {
    this.complaints = [];
    this.repository = new ComplaintRepository();
  }

  getComplaints() {
    return this.complaints;
  }

  async createComplaint(data: Partial<Complaint>) {
    const complaintData = plainToClass(CreateComplaintDto, data);
    const errors = await validate(complaintData);

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    console.log(complaintData);
    const saved = await this.repository.create(data);

    return saved; 
    
  }
}

export const complaintService = new ComplaintsService();