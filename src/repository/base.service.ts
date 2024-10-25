export default interface userRepository<T> {
  create(item: T): Promise<T>;
  find(): Promise<T[]>;
  findOne(id: string): Promise<T | null>;
  update(id: string, item: T): Promise<T | null>;
  delete(id: string): Promise<void>;
}
