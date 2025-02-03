import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Direccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  calle: string;

  @Column()
  ciudad: string;

  @Column()
  pais: string;

  @Column()
  codigo_postal: string;

  @Column()
  portal: string;

  @Column()
  datos_adicionales: string;
}
