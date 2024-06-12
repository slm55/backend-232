import AuthController from "../controllers/Auth.mjs";
import { Router } from "express";

const router = Router();
const controller = new AuthController();

router.post("/auth/login", controller.login);

export default router;