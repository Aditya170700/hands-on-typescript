import { UserRepository } from "./Repositories/UserRepository";

let repo = new UserRepository();

repo.getAll();
repo.getById();
repo.store();
repo.update();
repo.destroy();
