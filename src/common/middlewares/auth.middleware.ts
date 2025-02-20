import { Request, Response, NextFunction } from 'express';
import { JwtService } from '../../config/jwt.config';

export interface RequestWithUser extends Request {
  user?: any;
}

export const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Token não fornecido' });
    return;
  }

  try {
    const decoded = JwtService.verifyToken(token);

    if (!decoded) {
      res.status(401).json({ message: 'Token inválido ou expirado' });
      return;
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Erro ao validar token' });
  }
};
