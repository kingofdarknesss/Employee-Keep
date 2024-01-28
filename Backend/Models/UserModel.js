import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: String,
    required: true,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserModel);

export default User;
