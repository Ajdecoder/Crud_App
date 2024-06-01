import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  User_name: {
    type: String,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Address: {
    type: String,
    required: true,
    unique: true,
  },
  Desc: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);  
