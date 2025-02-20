export interface IComplaint {
    id?: number;
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