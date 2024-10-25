import User, { IUser } from "../models/user.model";
import userRepository from "./base.service";

class UserService implements userRepository<IUser> {
  async create(user: IUser): Promise<IUser> {
    const newUser = new User(user);
    return await newUser.save();
  }

  async find(): Promise<IUser[]> {
    return await User.find().lean().exec();
  }

  async findOne(email: string): Promise<IUser | null> {
    return await User.findOne({ email: email });
  }

  async update(id: string, user: IUser): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, user, { new: true }).lean().exec();
  }

  async delete(id: string): Promise<void> {
    await User.findByIdAndDelete(id).lean().exec();
  }
}

export default new UserService();
