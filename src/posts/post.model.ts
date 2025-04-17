import { Table, Column, Model, DataType } from 'sequelize-typescript';
//capa de modelo 
@Table
export class Post extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;
}
