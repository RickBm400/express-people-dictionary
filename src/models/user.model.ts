import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: String;
  last_name: String;
  email: String;
  password: String;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  name: { type: String, require: true },
  last_name: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IUser>("User", UserSchema);
