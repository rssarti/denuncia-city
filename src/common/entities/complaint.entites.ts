import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('complaints')
export class Complaint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id: number;

  @Column()
  user_id: number;

  @Column('text')
  description: string;

  @Column({ default: 0 })
  status: number;

  @Column({ default: 1 })
  priority: number;

  @Column('decimal', { precision: 10, scale: 6, nullable: true })
  latitude?: number;

  @Column('decimal', { precision: 10, scale: 6, nullable: true })
  longitude?: number;

  @Column({ type: 'varchar', nullable: true })
  image_url?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
