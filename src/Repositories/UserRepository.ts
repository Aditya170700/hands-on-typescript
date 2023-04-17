import { IUserRepository } from "./IUserRepository";

// semua method yang ada di IUserRepository harus dibuat di UserRepository
export class UserRepository implements IUserRepository {
  getAll(): void {
    console.log("Ini method getAll");
  }

  getById(): void {
    console.log("Ini method getById");
  }

  store(): void {
    console.log("Ini method store");
  }

  update(): void {
    console.log("Ini method update");
  }

  destroy(): void {
    console.log("Ini method destroy");
  }
}