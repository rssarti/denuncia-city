import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') 
export class User {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column()
  avatar!: string; 

  @Column({ unique: true })
  email!: string;

  @Column()
  phone!: string;
}
