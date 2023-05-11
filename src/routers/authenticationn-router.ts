import { Router } from "express";
import {
   signUpController,
   signInController,
} from "../controllers/authentication-controller";
import { validateUser } from "../middlewares/authentication-middleware";

const authenticationRouter = Router();

authenticationRouter.post("/sign-up", validateUser, signUpController);
authenticationRouter.post("/sign-in", signInController);
export default authenticationRouter;
