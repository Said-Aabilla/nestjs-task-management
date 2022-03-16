import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../enum/tasks-status-enum';

export class GetTaskFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
