import { IsNotEmpty, MinLength } from 'class-validator';

export class TodoDto {

    @IsNotEmpty()
    @MinLength(4)
    readonly title: string;

    @IsNotEmpty()
    readonly description: string;
}
 