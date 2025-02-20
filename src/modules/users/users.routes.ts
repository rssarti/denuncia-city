import { Router, Request, Response } from 'express';
import { userService } from './users.service';
import { IUser } from '../../common/interfaces/IUser';
import { authMiddleware, RequestWithUser } from '../../common/middlewares/auth.middleware';

const router = Router();

router.get('/', authMiddleware, async (req: Request, res: Response) => {
  const users: IUser[] = await userService.listUsers();
  res.json(users);
});

router.get('/me', authMiddleware, (req: RequestWithUser, res: Response): void => {
  if (!req.user) {
    res.status(401).json({ message: 'Usuário não autenticado' });
  }

  res.json({ user: req.user });
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await userService.authenticateUser(email, password);
    res.json(token);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
});

export const userRoutes = router;
