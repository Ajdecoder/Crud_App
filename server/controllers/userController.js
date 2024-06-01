import User from "../model/userModal.js";

export const create = async (req, res, next) => {
  try {
    let savedData = [];

    if (Array.isArray(req.body)) {
      for (const data of req.body) {
        const userData = new User(data);
        try {
          const savedItem = await userData.save();
          savedData.push(savedItem);
        } catch (error) {
          handleDuplicateKeyError(res, error);
          return;
        }
      }
    } else {
      const userData = new User(req.body);
      try {
        const savedItem = await userData.save();
        savedData.push(savedItem);
      } catch (error) {
        handleDuplicateKeyError(res, error);
        return;
      }
    }

    res.status(200).json(savedData);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const handleDuplicateKeyError = (res, error) => {
  if (error.code === 11000 && error.keyPattern) {
    const field = Object.keys(error.keyPattern)[0];
    res.status(400).json({
      message: `${field} must be unique.`,
    });
  } else {
    res.status(500).json({
      message: error.message,
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
