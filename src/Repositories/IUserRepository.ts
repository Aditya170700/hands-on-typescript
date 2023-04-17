export interface IUserRepository {
  getAll(): void;
  getById(): void;
  store(): void;
  update(): void;
  destroy(): void;
}