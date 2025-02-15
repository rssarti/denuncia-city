import { Request, Response, NextFunction } from 'express';
import { JwtService } from '../../config/jwt.config';

interface RequestWithUser extends Request {
  user?: any;
}

export const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const decoded = JwtService.verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }

  req.user = decoded;
  next();
};
