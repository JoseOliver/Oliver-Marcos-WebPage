import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Carrito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  cantidad: number;

  @Column("float")
  importe: number;

  @Column("int")
  descuento: number;
}
