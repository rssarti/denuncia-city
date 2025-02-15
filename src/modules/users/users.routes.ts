import { Router, Request, Response } from 'express';
import { userService } from './users.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const users = userService.listUsers();
  res.json(users);
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
