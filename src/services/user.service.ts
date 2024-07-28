export default abstract class BaseService<T> {
  abstract create(item: T): Promise<T>;
  abstract find(): Promise<T[]>;
  abstract findOne(id: string): Promise<T | null>;
  abstract update(id: string, item: T): Promise<T | null>;
  abstract delete(id: string): Promise<void>;
}
