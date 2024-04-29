import User from "../model/userModal.js";

export const create = async (req, res, next) => {
  try {
    const userData = new User(req.body);
    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const ReadAll = async (req, res, next) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({
        message: "User data is empty",
      });
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const ReadOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userData = await User.findById(id);
    if (!userData) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const Update = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.set(req.body);
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const Delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted Successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
