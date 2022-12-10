import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
export class Todo extends Model<Todo> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    description: string;

}
