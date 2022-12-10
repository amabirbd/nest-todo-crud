import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { TodosService } from './todos.service';
import { Todo as TodoEntity } from './todo.entity';
import { TodoDto } from './dto/todo.dto';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService) { }

    @Get()
    async findAll() {
        // get all posts in the db
        return await this.todoService.findAll();
    }

    @Post()
    async create(@Body() todo: TodoDto, @Request() req): Promise<TodoEntity> {
        // create a new post and return the newly created post
        return await this.todoService.create(todo);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() todo: TodoDto, @Request() req): Promise<TodoEntity> {
        // get the number of row affected and the updated post
        const { numberOfAffectedRows, updatedTodo } = await this.todoService.update(id, todo);

        // if the number of row affected is zero, it means the post doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This todo doesn\'t exist');
        }

        // return the updated post
        return updatedTodo;
    }

    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        // delete the post with this id
        const deleted = await this.todoService.delete(id);

        // if the number of row affected is zero, then the post doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This todo doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }
}
