export class CreateComplaintDto {
  category_id: number;
  user_id: number;
  description: string;
  status?: number = 0;
  priority?: number = 1;
  latitude?: number;
  longitude?: number;
  image_url?: string;
}

export class UpdateComplaintDto {
  category_id?: number;
  user_id?: number;
  description?: string;
  status?: number;
  priority?: number;
  latitude?: number;
  longitude?: number;
  image_url?: string;
}

export class ComplaintResponseDto {
  id: number;
  category_id: number;
  user_id: number;
  description: string;
  status: number;
  priority: number;
  latitude?: number;
  longitude?: number;
  image_url?: string;
  created_at: Date;
  updated_at: Date;
}