import bcrypt from 'bcryptjs';
import { User } from "../../common/entities/user.entities";
import UserRepository from "../../common/repositories/user.repositories";
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import jwt from 'jsonwebtoken';
import { CreateUserDTO } from '../../common/dtos/user.dto';
class UserService {

  private readonly repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async listUsers(): Promise<any> {
    const users = await this.repository.find();
    return users.map(({ id, name, email, created_at, updated_at }) => ({ id, name, email, created_at, updated_at })); 
  }

  async findOne(id: number): Promise<User> {
    const user = await this.repository.findOne(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
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

  async authenticateUser(email: string, password: string): Promise<{ token: string }> {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET ?? "false",
      { expiresIn: "1h" }
    );

    return { token };
  }
}

export const userService = new UserService();