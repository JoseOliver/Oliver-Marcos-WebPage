import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  metodo: string;
}
