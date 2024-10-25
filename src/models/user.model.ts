import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  user_name: String;
  name: String;
  last_name: String;
  email: String;
  password: String;
}

const UserSchema: Schema = new Schema({
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, require: true },
  last_name: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IUser>("User", UserSchema);
