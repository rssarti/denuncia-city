import { Router, Request, Response } from 'express';
import { categoriesService } from './categories.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, Categories' });
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const complaint = await categoriesService.createCategory(req.body);
    res.json(complaint);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
});

export const categoriesRoutes = router;
