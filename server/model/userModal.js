import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const crudSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  User_name: {
    type: String,
    required: true,
  },
  Email: {
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
const ProfileSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
});

ProfileSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
  } catch (err) {
    console.error("JWT token generation error:", err);
    throw err;
  }
};

const User = mongoose.model("User", crudSchema);
export const Profile = mongoose.model("Profile", ProfileSchema);
export default User;
