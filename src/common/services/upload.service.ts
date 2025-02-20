import multer from 'multer';
import path from 'path';

class FileUploadService {
  private readonly storage;

  constructor() {
    this.storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
      },
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}${ext}`;
        cb(null, filename);
      },
    });
  }

  public getMulterInstance() {
    return multer({ storage: this.storage });
  }
}

export const uploadService =  new FileUploadService();
