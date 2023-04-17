"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
// semua method yang ada di IUserRepository harus dibuat di UserRepository
class UserRepository {
    getAll() {
        console.log("Ini method getAll");
    }
    getById() {
        console.log("Ini method getById");
    }
    store() {
        console.log("Ini method store");
    }
    update() {
        console.log("Ini method update");
    }
    destroy() {
        console.log("Ini method destroy");
    }
}
exports.UserRepository = UserRepository;
