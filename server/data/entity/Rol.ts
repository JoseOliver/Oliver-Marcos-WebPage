import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  administrador: boolean;

  @Column()
  vendedor: boolean;
}
