import { IsEnum } from 'class-validator';
import { TaskStatus } from '../enum/tasks-status-enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
