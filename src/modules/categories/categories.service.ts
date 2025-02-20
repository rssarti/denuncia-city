import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { CreateCategoryDTO } from "../../common/dtos/category.entites";
import { Category } from "../../common/entities/category.entities";
import CategoryRepository from "../../common/repositories/category.repositories";

class CategoriesService {
  public complaints: string[];
  private readonly repository: CategoryRepository;

  constructor() {
    this.complaints = [];
    this.repository = new CategoryRepository();
  }

  getComplaints() {
    return this.complaints;
  }

  async createCategory(data: Partial<Category>) {
    const categoryData = plainToClass(CreateCategoryDTO, data);
    const errors = await validate(categoryData);

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    console.log(categoryData);
    const saved = await this.repository.create(data);

    return saved; 
    
  }
}

export const categoriesService = new CategoriesService();