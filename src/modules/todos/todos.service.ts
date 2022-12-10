import { Injectable, Inject } from '@nestjs/common';

import { Todo } from './todo.entity';
import { TodoDto } from './dto/todo.dto';
import { TODO_REPOSITORY } from '../../core/constants';

@Injectable()
export class TodosService {
    constructor(@Inject(TODO_REPOSITORY) private readonly todoRepository: typeof Todo) { }

    async create(todo: TodoDto): Promise<Todo> {
        return await this.todoRepository.create<Todo>({ ...todo });
    }

    async findAll(): Promise<Todo[]> {
        return await this.todoRepository.findAll<Todo>();
    }

    async findOne(id): Promise<Todo> {
        return await this.todoRepository.findOne({
            where: { id },
        });
    }

    async delete(id) {
        return await this.todoRepository.destroy({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedTodo]] = await this.todoRepository.update({ ...data }, { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedTodo };
    }
}
