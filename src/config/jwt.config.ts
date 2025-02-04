import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET ?? "default_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? "1h";

export class JwtService {
  static generateToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET as Secret);
  }

  static verifyToken(token: string): any {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
  }
}
