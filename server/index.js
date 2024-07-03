import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/user.Routes.js";
import bcrypt from "bcrypt";
import User from "./model/userModal.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.Atlas_MONGO_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api", route);
app.use("/users", route);
