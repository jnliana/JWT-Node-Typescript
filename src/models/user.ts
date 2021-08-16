import { Schema, Document, model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}

// UserModel
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre<IUser>("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  /* Generate a string to encrypt the data, 
    ten is the times that the algorithm executes,
    more times more secure, but if you put
  a lot will require more processing, by default 10 */
  const salt = await bcrypt.genSalt(10);
  // hash: encrypted password
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  // Compares the password for the user in DB with the password provides for the user
  return await bcrypt.compare(password, this.password);
};

export default model<IUser>("User", userSchema);
