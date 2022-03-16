import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from '../enum/tasks-status-enum';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from '../dto/create-task-dto';
import { GetTaskFilterDto } from '../dto/get-tasks-filte-dto';
import { UpdateTaskStatusDto } from '../dto/update-task-status-dto';
import { TasksRepository } from '../repository/task-repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entity/task-entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private taskRepository: TasksRepository,
  ) {}

  getTasks(filterDto: GetTaskFilterDto): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne(id);
    if (!task) throw new NotFoundException();
    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) throw new NotFoundException();
  }

  async updateTaskStatus(
    id: string,
    updateTaskStatusDto: UpdateTaskStatusDto,
  ): Promise<Task> {
    const task = await this.getTaskById(id);
    const { status } = updateTaskStatusDto;
    task.status = status;
    await this.taskRepository.save(task);
    return task;
  }
}
