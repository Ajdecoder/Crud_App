import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  User_name: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Desc: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);  
