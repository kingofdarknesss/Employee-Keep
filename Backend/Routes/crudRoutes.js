import express from "express";
import { createUserController } from "../Controllers/createUserController.js";
import { fetchAllUserController } from "../Controllers/fetchAllUserController.js";
import { fetchSingleUserController } from "../Controllers/fetchAllUserController.js";
import { deleteUserController } from "../Controllers/deleteUserController.js";
import { updateUserController } from "../Controllers/updateUserController.js";
const router = express.Router();

router.post("/create", createUserController);
router.get("/", fetchAllUserController);
router.get("/find/:id", fetchSingleUserController);
router.delete("/delete/:id", deleteUserController);
router.put("/update/:id", updateUserController);

export default router;
