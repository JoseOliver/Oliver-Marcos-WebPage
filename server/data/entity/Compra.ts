import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column("float")
  total: number;

  @Column()
  detalle: string;
}
