import bcrypt from 'bcryptjs';
import { User } from "../../common/entities/user.entities";
import UserRepository from "../../common/repositories/user.repositories";
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../../common/dtos/CreateUserDTO';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';


class UserService {

  private readonly repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async listUsers(): Promise<any> {
    return await this.repository.find();
  }

  async createUser(data: Partial<User>): Promise<User> {

    const userData: CreateUserDTO = plainToClass(CreateUserDTO, data);
    const errors = await validate(userData);

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    const salt = await bcrypt.genSalt(10); 

    if (!data.password) {
      throw new Error("Password is required");
    }
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;
    const savedUser = await this.repository.create(data);

    return savedUser; 
    
  }
}

export const userService = new UserService();