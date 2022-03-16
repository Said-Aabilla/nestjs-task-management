import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './repository/task-repository';
import { TasksController } from './controller/tasks.controller';
import { TasksService } from './service/tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
