import { Router } from "express";
import { validateUser } from "../middlewares/authentication-middleware.ts";
import { signInController } from "../controllers/authentication-controller/signIn.ts";
import { signUpController } from "../controllers/authentication-controller/signUp.ts";

const authenticationRouter = Router();

authenticationRouter.post("/sign-up", validateUser, signUpController);
authenticationRouter.post("/sign-in", signInController);
export default authenticationRouter;
