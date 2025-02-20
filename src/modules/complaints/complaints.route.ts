import { Router, Request, Response } from 'express';
import { complaintService } from './complaints.service';
import multer from 'multer';
import path from 'path';
import { uploadService } from '../../common/services/upload.service';

const router = Router();
const upload = uploadService.getMulterInstance();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
});

router.post('/', upload.single('image_url'), async (req: Request, res: Response) => {
  try {
    const imagePath = req.file ? `/uploads/${req.file.filename}` : undefined;

    const complaintData = {
      ...req.body,
      image_url: imagePath,
    };
    const complaint = await complaintService.createComplaint(complaintData);
    res.json(complaint);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
});

export const complaintsRoutes = router;
