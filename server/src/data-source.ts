import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "../data/entity/Usuario";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Usuario],
  migrations: [],
  subscribers: [],
});
