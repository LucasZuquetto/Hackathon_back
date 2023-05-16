import { Router } from "express";
import { validateUser } from "../middlewares/authentication-middleware";
import { signInController } from "../controllers/authentication-controller/signIn";
import { signUpController } from "../controllers/authentication-controller/signUp";

const authenticationRouter = Router();

authenticationRouter.post("/sign-up", validateUser, signUpController);
authenticationRouter.post("/sign-in", signInController);
export default authenticationRouter;
