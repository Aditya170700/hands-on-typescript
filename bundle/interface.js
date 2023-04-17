"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("./Repositories/UserRepository");
let repo = new UserRepository_1.UserRepository();
repo.getAll();
repo.getById();
repo.store();
repo.update();
repo.destroy();
