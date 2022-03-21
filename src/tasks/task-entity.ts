import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from 'src/tasks/enum/tasks-status-enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
