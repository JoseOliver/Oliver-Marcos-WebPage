import { AppDataSource } from "./src/data-source";
import { Usuario } from "./data/entity/Usuario";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new Usuario();
    user.nombre = "Timber";
    user.apellido = "Saw";
    user.email = "jose@oliver.com";
    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(Usuario);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express framework.");
  })
  .catch((error) => console.log(error));
