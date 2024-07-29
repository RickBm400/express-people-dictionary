import BaseService from "./base.service";
import User, { IUser } from "../models/user.model";

class UserService extends BaseService<IUser> {
  async create(user: IUser): Promise<IUser> {
    const newUser = new User(user);
    return await newUser.save();
  }

  async find(): Promise<IUser[]> {
    return await User.find().lean().exec();
  }

  async findOne(id: string): Promise<IUser | null> {
    return await User.findById(id).lean().exec();
  }

  async update(id: string, user: IUser): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, user, { new: true }).lean().exec();
  }

  async delete(id: string): Promise<void> {
    await User.findByIdAndDelete(id).lean().exec();
  }
}

export default new UserService();
