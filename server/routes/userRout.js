import express from 'express';
import {Delete, ReadAll, ReadOne, Update, create} from '../controllers/userController.js'

const route = express.Router();

route.post("/create", create)
route.get("/readAll", ReadAll)
route.get("/readOne/:id", ReadOne)
route.put("/update/:id", Update)
route.delete("/delete/:id", Delete)

export default route